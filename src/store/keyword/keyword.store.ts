import {
  Dispatch,
  FormEvent,
  MouseEvent,
  SetStateAction,
  useCallback,
} from 'react';
import { StoreInstance } from '@/core';
import { GoogleSheetKeywordTitle, KeywordSheet } from '@/sheet';
import { KeywordRowType, KeywordStoreType } from './types';

export class KeywordStore extends StoreInstance<KeywordStoreType> {
  useLoad(title: GoogleSheetKeywordTitle): () => Promise<void> {
    const setState = this.useSetState();

    return useCallback(async () => {
      setState((prev) => ({ ...prev, loading: true }));
      try {
        const googleSheet = new KeywordSheet();
        await googleSheet.connect();
        const keywordSheet = await googleSheet.getSheetByTitle(title);
        const keywordRows = (await keywordSheet.getRows()) as KeywordRowType[];

        setState((prev) => ({ ...prev, loading: false, rows: keywordRows }));
      } catch (e) {
        setState((prev) => ({ ...prev, loading: false }));
      }
    }, [title, setState]);
  }

  useAppend(
    title: GoogleSheetKeywordTitle,
    keyword: string,
    setKeyword: Dispatch<SetStateAction<string>>,
  ): (e: FormEvent<HTMLFormElement>) => Promise<void> {
    const setState = this.useSetState();

    return useCallback(
      async (e) => {
        e.preventDefault();

        try {
          setState((prev) => ({ ...prev, loading: true }));

          const googleSheet = new KeywordSheet();
          await googleSheet.connect();
          const keywordSheet = await googleSheet.getSheetByTitle(title);

          if (keyword.trim()) {
            await keywordSheet.addRow({ keyword });
          }

          const updatedRows =
            (await keywordSheet.getRows()) as KeywordRowType[];

          setState((prev) => ({
            ...prev,
            loading: false,
            rows: updatedRows,
          }));
          setKeyword('');
        } catch (e) {
          setState((prev) => ({ ...prev, loading: false }));
          setKeyword('');
        }
      },
      [title, keyword, setState, setKeyword],
    );
  }

  useUpdate(
    title: GoogleSheetKeywordTitle,
    row: KeywordRowType,
    keyword: string,
    setEditMode: Dispatch<SetStateAction<boolean>>,
  ): (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>,
  ) => Promise<void> {
    const setState = this.useSetState();

    return useCallback(
      async (e) => {
        e.preventDefault();

        try {
          setState((prev) => ({ ...prev, loading: true }));

          const googleSheet = new KeywordSheet();
          await googleSheet.connect();
          const keywordSheet = await googleSheet.getSheetByTitle(title);
          const keywordRows = await keywordSheet.getRows();

          const targetRow = keywordRows.find(
            ({ rowIndex, keyword }) =>
              [rowIndex, keyword].join(':') ===
              [row.rowIndex, row.keyword].join(':'),
          );

          if (targetRow) {
            targetRow.keyword = keyword;
            await targetRow.save();
          }

          const updatedRows =
            (await keywordSheet.getRows()) as KeywordRowType[];

          setState((prev) => ({
            ...prev,
            loading: false,
            rows: updatedRows,
          }));
          setEditMode(false);
        } catch (e) {
          setState((prev) => ({ ...prev, loading: false }));
          setEditMode(false);
        }
      },
      [title, row, setState, keyword, setEditMode],
    );
  }

  useDelete(
    title: GoogleSheetKeywordTitle,
    row: KeywordRowType,
  ): () => Promise<void> {
    const setState = this.useSetState();

    return useCallback(async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));

        const googleSheet = new KeywordSheet();
        await googleSheet.connect();
        const keywordSheet = await googleSheet.getSheetByTitle(title);
        const keywordRows = await keywordSheet.getRows();

        const targetRow = keywordRows.find(
          ({ rowIndex, keyword }) =>
            [rowIndex, keyword].join(':') ===
            [row.rowIndex, row.keyword].join(':'),
        );

        if (targetRow) {
          await targetRow.delete();
        }

        const updatedRows = (await keywordSheet.getRows()) as KeywordRowType[];

        setState((prev) => ({
          ...prev,
          loading: false,
          rows: updatedRows,
        }));
      } catch (e) {
        setState((prev) => ({ ...prev, loading: false }));
      }
    }, [title, row, setState]);
  }
}

export const keywordStore = new KeywordStore(KeywordStore.name, {
  loading: false,
  rows: [],
});
