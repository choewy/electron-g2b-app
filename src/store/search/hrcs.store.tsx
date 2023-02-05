import { DateTime } from 'luxon';
import { SyntheticEvent, useCallback } from 'react';
import {
  HrcsItemType,
  hrcsTask,
  searchApi,
  SearchCustomQueryType,
  SearchTaskType,
} from '@/apis';
import { KeywordRegExp, StoreInstance } from '@/core';
import { DateFormat, DateChangeEventHandler } from '@/component';
import { AppMessageType, appStore } from '../app';
import { keywordStore } from '../keyword';
import { SearchStoreType } from './types';

export class HrcsSearchStore extends StoreInstance<
  SearchStoreType<SearchTaskType, SearchCustomQueryType, HrcsItemType>
> {
  useChangeTaskEvent(): (
    text: string,
  ) => (e: SyntheticEvent<Element, Event>, checked: boolean) => void {
    const setState = this.useSetState();

    return useCallback(
      (text) => (_, checked) => {
        const task = hrcsTask.findByText(text);

        if (!task) {
          return;
        }

        if (!task.endPoint && checked) {
          return setState((prev) => ({
            ...prev,
            tasks: hrcsTask.initValues,
          }));
        }

        if (task.endPoint && checked) {
          return setState((prev) => {
            const tasks =
              prev.tasks.length === hrcsTask.otherValues.length - 1
                ? hrcsTask.initValues
                : [...prev.tasks.filter(({ endPoint }) => endPoint), task];

            return { ...prev, tasks };
          });
        }

        if (task.endPoint && !checked) {
          return setState((prev) => {
            const tasks = prev.tasks.filter(({ text }) => text !== task.text);

            return {
              ...prev,
              tasks: tasks.length ? tasks : hrcsTask.initValues,
            };
          });
        }
      },
      [setState],
    );
  }

  useSetDateCallback(key: 'inqryBgnDt' | 'inqryEndDt'): DateChangeEventHandler {
    const setState = this.useSetState();

    return useCallback(
      (datetime) => {
        setState((prev) => {
          let value: string | undefined;

          if (!datetime) {
            value = undefined;
          } else {
            switch (key) {
              case 'inqryBgnDt':
                value = datetime.startOf('day').toFormat(DateFormat);
                break;

              case 'inqryEndDt':
                value = datetime.endOf('day').toFormat(DateFormat);
                break;
            }
          }

          return { ...prev, query: { ...prev.query, [key]: value } };
        });
      },
      [key, setState],
    );
  }

  private async recursiveApiCall({
    includeRegExp,
    excludeRegExp,
    rows,
    endPoint,
    query,
    setMessage,
  }: {
    includeRegExp?: KeywordRegExp;
    excludeRegExp?: KeywordRegExp;
    rows: HrcsItemType[];
    endPoint: string;
    query: SearchCustomQueryType;
    setMessage(messages: AppMessageType): Promise<void>;
  }) {
    try {
      const res = await searchApi.hrcs(endPoint, query);
      const { pageNo, numOfRows, totalCount, items } = res.response.body;

      rows = rows.concat(
        (items || []).reduce<HrcsItemType[]>((searchedRow, item) => {
          const includeKeywords =
            includeRegExp && item.prdctClsfcNoNm.match(includeRegExp);

          const excludeKeywords = excludeRegExp
            ? [item.prdctClsfcNoNm, item.rlDminsttNm]
                .join()
                .match(excludeRegExp)
            : null;

          if (includeKeywords && !excludeKeywords) {
            item.keyword = includeKeywords[0];
            searchedRow.push(item);
          }

          return searchedRow;
        }, []),
      );

      if (totalCount > pageNo * numOfRows) {
        rows = await this.recursiveApiCall({
          rows,
          includeRegExp,
          excludeRegExp,
          endPoint,
          setMessage,
          query: {
            ...query,
            pageNo: pageNo + 1,
          },
        });
      }
    } catch (e) {
      const error = e as any;
      setMessage({ error: error.message });
    }

    return rows;
  }

  useSearchCallback(): () => Promise<void> {
    const [{ tasks, query }, setState] = this.useState();

    const setLoading = appStore.useSetLoading();
    const setMessage = appStore.useSetMessage();

    const keywords = keywordStore.useValue();
    const include = keywords.include || [];
    const exclude = keywords.exclude || [];

    return useCallback(async () => {
      if (!tasks || !query) {
        return setMessage({
          warn: '검색 조건을 다시 확인하세요.',
        });
      }

      let taskTargets: SearchTaskType[];

      if (tasks.length === 1 && !tasks[0].endPoint) {
        taskTargets = hrcsTask.otherValues;
      } else {
        taskTargets = tasks;
      }

      let rows: HrcsItemType[] = [];

      setLoading(true);

      const includeRegExp = include.length
        ? new KeywordRegExp(include)
        : undefined;

      const excludeRegExp = exclude.length
        ? new KeywordRegExp(exclude)
        : undefined;

      for (const task of taskTargets) {
        rows = await this.recursiveApiCall({
          includeRegExp,
          excludeRegExp,
          query,
          rows,
          endPoint: task.endPoint,
          setMessage,
        });
      }

      setState((prev) => ({
        ...prev,
        rows: rows
          .sort((x, y) => x.keyword.localeCompare(y.keyword))
          .map((row, i) => {
            row.index = i + 1;
            return row;
          }),
      }));
      setLoading(false);
      setMessage({ info: `${rows.length}건의 결과가 검색되었습니다.` });
    }, [tasks, query, keywords, setState, setLoading, setMessage]);
  }

  useResetRows(): () => void {
    const setState = this.useSetState();

    return useCallback(() => {
      setState((prev) => ({ ...prev, rows: [] }));
    }, [setState]);
  }
}

export const hrcsSearchStore = new HrcsSearchStore(HrcsSearchStore.name, {
  tasks: hrcsTask.initValues,
  query: {
    pageNo: 1,
    inqryBgnDt: DateTime.local().startOf('day').toFormat(DateFormat),
    inqryEndDt: DateTime.local().endOf('day').toFormat(DateFormat),
  },
  rows: [],
});
