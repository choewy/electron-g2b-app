import { SearchType } from '@module/search/dto/enums';

export class ExcelDto {
  id: number;
  type: SearchType;
  key: string;
  filename: string;
  uploadedAt: string;
}
