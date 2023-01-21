import { GoogleSheetKeywordTitle } from './enums';

export const KEYWORD_TITLES = Object.values(GoogleSheetKeywordTitle);
export const KEYWORD_LABEL_TEXT: Record<GoogleSheetKeywordTitle, string> = {
  include: '검색 키워드',
  exclude: '제외 키워드',
};
