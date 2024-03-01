import { useCallback, useEffect } from 'react';

import { CustomEventMap, customEventListener } from '@core/custom.event-listener';

import { AlertEvent } from '@layout/alert/alert.event';

import { filesStore } from '@module/file/file.store';
import { fileService } from '@module/file/file.service';

import { SearchType } from './dto/enums';
import { searchStore } from './search.store';
import { searchAxios } from './search.axios';
import { searchSocket } from './search.socket';
import { SearchCountEvent } from './events/search-count.event';
import { SearchFileEvent } from './events/search-file.event';
import { SearchEndEvent } from './events/search-end.event';

export class SearchHook {
  useHas(): void {
    const setSearch = searchStore.useSetState();

    const has = useCallback(async () => {
      const [bids, hrcs] = await Promise.all([searchAxios.has(SearchType.Bids), searchAxios.has(SearchType.Hrcs)]);

      setSearch((prev) => ({
        ...prev,
        bids: !!bids.data,
        hrcs: !!hrcs.data,
      }));
    }, [setSearch]);

    useEffect(() => {
      has();
    }, [has]);
  }

  useSocket(): void {
    const setSearch = searchStore.useSetState();
    const setFiles = filesStore.useSetState();

    const customEventMaps = [
      new CustomEventMap(SearchCountEvent, (e) => {
        const type = e.detail.type === SearchType.Bids ? '입찰공고' : '사전규격';

        AlertEvent.info(`${e.detail.count}건의 ${type} 데이터가 검색되었습니다.`).dispatch();
      }),
      new CustomEventMap(SearchFileEvent, (e) => {
        setFiles((prev) => ({
          ...prev,
          rows: prev.query.type === e.detail.type ? [e.detail, ...prev.rows] : prev.rows,
        }));

        fileService.download(e.detail);
      }),
      new CustomEventMap(SearchEndEvent, (e) => {
        const type = e.detail.type === SearchType.Bids ? '입찰공고' : '사전규격';

        if (e.detail.error) {
          AlertEvent.warning(`${type} 검색을 실패하였습니다(${e.detail.error.message}).`).dispatch();
        } else {
          AlertEvent.info(`${type} 검색이 완료되었습니다.`).dispatch();
        }

        setSearch((prev) => {
          switch (e.detail.type) {
            case SearchType.Bids:
              return { ...prev, bids: false };

            case SearchType.Hrcs:
              return { ...prev, hrcs: false };

            default:
              return prev;
          }
        });
      }),
    ];

    useEffect(() => {
      if (searchSocket.disconnected) {
        searchSocket.connection();
      }
    }, []);

    useEffect(() => {
      const cleanupFunction = customEventListener.addEventListeners(...customEventMaps);

      return () => cleanupFunction();
    }, []);
  }
}

export const searchHook = new SearchHook();
