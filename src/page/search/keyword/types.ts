import { FirebaseKeywordRowType, FirebaseKeywordType } from '@/core';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

export type KeywordTabsProps = {
  keywordType: FirebaseKeywordType;
  onChange(
    e: SyntheticEvent<Element, Event>,
    keywordType: FirebaseKeywordType,
  ): void;
};

export type KeywordTabProps = {
  fixedType: FirebaseKeywordType;
  keywordType: FirebaseKeywordType;
};

export type KeywordFormType = {
  fixedType: FirebaseKeywordType;
  onLoad(): Promise<void>;
};

export type KeywordRowMode = 'readonly' | 'editable';

export type KeywordRowProps = {
  row: FirebaseKeywordRowType;
  onLoad(): Promise<void>;
};

export type KeywordChildRowProps = KeywordRowProps & {
  setRowMode: Dispatch<SetStateAction<KeywordRowMode>>;
};

export type KeywordDeleteModalProps = {
  hidden: boolean;
  onLoad(): Promise<void>;
};
