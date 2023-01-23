import { FirebaseKeywordRowType, FirebaseKeywordType } from '@/core';
import { Dispatch, SetStateAction } from 'react';

export type KeywordTabProps = {
  content: FirebaseKeywordType;
  value: FirebaseKeywordType;
};

export type KeywordRowProps = {
  row: FirebaseKeywordRowType;
  onLoad(): Promise<void>;
};

export type KeywordRowDetailProps = KeywordRowProps & {
  setEditable: Dispatch<SetStateAction<boolean>>;
};
