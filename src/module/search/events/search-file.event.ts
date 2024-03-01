import { FileDto } from '@module/file/dto/file.dto';

export class SearchFileEvent extends CustomEvent<FileDto> {
  constructor(detail: FileDto) {
    super(SearchFileEvent.name, { detail });
  }

  dispatch(): void {
    window.dispatchEvent(this);
  }
}
