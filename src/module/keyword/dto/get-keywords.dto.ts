import { KeywordType } from './enums';

export class GetKeywordsDto {
  constructor(readonly type: KeywordType = KeywordType.Include) {}
}
