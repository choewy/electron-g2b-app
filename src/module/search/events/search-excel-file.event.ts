import { FileDto } from '@module/file/dto/file.dto';

import { SearchType } from '../dto/enums';

export class SearchExcelFileEvent extends CustomEvent<{
  type: SearchType;
  value: FileDto;
}> {
  constructor(detail: { type: SearchType; value: FileDto }) {
    super(SearchExcelFileEvent.name, { detail });
  }

  dispatch(): void {
    window.dispatchEvent(this);
  }
}
