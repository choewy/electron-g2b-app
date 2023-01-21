import { GoogleSheetKeywordTitle } from '@/sheet';
import { KeywordRowType } from '@/store';
import { PropsWithChildren, SyntheticEvent } from 'react';

export type KeywordSettingTabsProps = PropsWithChildren & {
  value: number;
  onChange: (event: SyntheticEvent<Element, Event>, value: number) => void;
};

export type KeywordSettingTabPanelProps = PropsWithChildren & {
  hidden: boolean;
};

export type KeywordSettingTabContentProps = {
  title: GoogleSheetKeywordTitle;
  hidden: boolean;
};

export type KeywordSettingItemProps = {
  title: GoogleSheetKeywordTitle;
  row: KeywordRowType;
};
