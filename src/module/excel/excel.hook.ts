import { useCallback, useEffect } from 'react';

import { AlertEvent } from '@layout/alert/alert.event';

import { excelStore } from './excel.store';
import { fileAxios } from './excel.axios';

export class ExcelHook {
  useLoad() {
    const [{ query }, setFiles] = excelStore.useState();

    const getExcels = useCallback(async () => {
      const { error, data } = await fileAxios.getExcels(query.type);

      if (error) {
        AlertEvent.warning(error.message).dispatch();
      } else {
        setFiles((prev) => ({ ...prev, rows: data }));
      }
    }, [query, setFiles]);

    useEffect(() => {
      getExcels();
    }, [getExcels]);
  }
}

export const excelHook = new ExcelHook();
