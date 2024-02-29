import { useCallback, useEffect } from 'react';

import { AlertEvent } from '@layout/alert/alert.event';

import { keywordsStore } from './keyword.store';
import { keywordAxios } from './keyword.axios';
import { GetKeywordsDto } from './dto/get-keywords.dto';

export class KeywordHook {
  useLoad() {
    const [{ query }, setKeywords] = keywordsStore.useState();

    const getKeywords = useCallback(async () => {
      const { error, data } = await keywordAxios.getKeywords(new GetKeywordsDto(query.type));

      if (error) {
        AlertEvent.warning(error.message).dispatch();
      } else {
        setKeywords((prev) => ({ ...prev, rows: data }));
      }
    }, [query, setKeywords]);

    useEffect(() => {
      getKeywords();
    }, [getKeywords]);
  }
}

export const keywordHook = new KeywordHook();
