import { ExcelDto } from '@module/excel/dto/excel.dto';

export class SearchExcelEvent extends CustomEvent<ExcelDto> {
  constructor(detail: ExcelDto) {
    super(SearchExcelEvent.name, { detail });
  }

  dispatch(): void {
    window.dispatchEvent(this);
  }
}
