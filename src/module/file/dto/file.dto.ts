import { SearchType } from '@module/search/dto/enums';

export class FileDto {
  id: number;
  type: SearchType;
  key: string;
  filename: string;
  uploadedAt: string;
}
