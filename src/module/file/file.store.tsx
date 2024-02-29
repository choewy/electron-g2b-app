import { RecoilStore } from '@core/recoil-store';

import { FileDto } from './dto/file.dto';
import { Link, TableCellProps } from '@mui/material';
import { SearchType } from '@module/search/dto/enums';
import { fileService } from './file.service';

export type FilesStoreProps = {
  query: { type: SearchType };
  rows: FileDto[];
};

export class FilesStore extends RecoilStore<FilesStoreProps> {
  useTableColumns(): TableCellProps[] {
    return [
      {
        children: '순번',
        sx: { minWidth: 40 },
        align: 'center',
      },
      {
        children: '파일명',
        sx: { minWidth: 100, width: '100%' },
        align: 'center',
      },
    ];
  }

  useTableRows(): TableCellProps[][] {
    const value = this.useValue();
    const rows: TableCellProps[][] = [];

    for (let i = 0; i < value.rows.length; i++) {
      const file = value.rows[i];
      const row: TableCellProps[] = [
        {
          children: i + 1,
          align: 'center',
        },
        {
          children: (
            <div onClick={() => fileService.download(file)}>
              <Link>{file.filename}</Link>
            </div>
          ),
        },
      ];

      rows.push(row);
    }

    return rows;
  }
}

export const filesStore = new FilesStore({
  query: { type: SearchType.Bids },
  rows: [],
});
