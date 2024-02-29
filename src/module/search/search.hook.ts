import { useCallback, useEffect } from 'react';

import { SearchType } from './dto/enums';
import { searchStore } from './search.store';
import { searchAxios } from './search.axios';
import { bidsSearchSocket, hrcsSearchSocket } from './search.socket';
import { CustomEventMap, customEventListener } from '@core/custom.event-listener';
import { SearchCountEvent } from './events/search-count.event';
import { AlertEvent } from '@layout/alert/alert.event';
import { SearchExcelFileEvent } from './events/search-excel-file.event';
import { filesStore } from '@module/file/file.store';
import { SearchFailEvent } from './events/search-fail.event';
import { fileService } from '@module/file/file.service';

export class SearchHook {
  useHas(): void {
    const setSearch = searchStore.useSetState();

    const has = useCallback(async () => {
      const [bids, hrcs] = await Promise.all([searchAxios.has(SearchType.Bids), searchAxios.has(SearchType.Hrcs)]);

      setSearch((prev) => ({
        ...prev,
        bids: bids.data ?? null,
        hrcs: hrcs.data ?? null,
      }));
    }, [setSearch]);

    useEffect(() => {
      has();
    }, [has]);
  }

  useSocket(): void {
    const [{ bids, hrcs }, setSearch] = searchStore.useState();
    const setFiles = filesStore.useSetState();

    const customEventMaps = [
      new CustomEventMap(SearchCountEvent, (e) => {
        const type = e.detail.type === SearchType.Bids ? '입찰공고' : '사전규격';

        AlertEvent.info(`${e.detail.value}건의 ${type} 데이터가 검색되었습니다.`).dispatch();

        if (e.detail.value === 0) {
          setSearch((prev) => ({ ...prev, [e.detail.type]: null }));
        }
      }),
      new CustomEventMap(SearchExcelFileEvent, (e) => {
        fileService.download(e.detail.value);

        setFiles((prev) => ({
          ...prev,
          rows: prev.query.type === e.detail.type ? [e.detail.value, ...prev.rows] : prev.rows,
        }));

        setSearch((prev) => ({ ...prev, [e.detail.type]: null }));
      }),
      new CustomEventMap(SearchFailEvent, (e) => {
        const type = e.detail.type === SearchType.Bids ? '입찰공고' : '사전규격';

        AlertEvent.warning(`${type} 검색에 실패하였습니다(${e.detail.value.message}).`).dispatch();
        setSearch((prev) => ({ ...prev, [e.detail.type]: null }));
      }),
    ];

    useEffect(() => {
      let connection = 0;

      if (bids) {
        if (bidsSearchSocket.connected === false) {
          bidsSearchSocket.connection(SearchType.Bids, bids.id);
        }

        connection++;
      } else {
        bidsSearchSocket.disconnect();
      }

      if (hrcs) {
        if (hrcsSearchSocket.connected === false) {
          hrcsSearchSocket.connection(SearchType.Hrcs, hrcs.id);
        }

        connection++;
      } else {
        hrcsSearchSocket.disconnect();
      }

      if (connection === 0) {
        return;
      }

      const cleanupFunction = customEventListener.addEventListeners(...customEventMaps);

      return () => cleanupFunction();
    }, [bids, hrcs]);
  }
}

export const searchHook = new SearchHook();
