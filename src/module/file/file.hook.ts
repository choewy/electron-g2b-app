import { useCallback, useEffect } from 'react';

import { AlertEvent } from '@layout/alert/alert.event';

import { filesStore } from './file.store';
import { fileAxios } from './file.axios';

export class FileHook {
  useLoad() {
    const [{ query }, setFiles] = filesStore.useState();

    const getFiles = useCallback(async () => {
      const { error, data } = await fileAxios.getFiles(query.type);

      if (error) {
        AlertEvent.warning(error.message).dispatch();
      } else {
        setFiles((prev) => ({ ...prev, rows: data }));
      }
    }, [query, setFiles]);

    useEffect(() => {
      getFiles();
    }, [getFiles]);
  }
}

export const fileHook = new FileHook();
