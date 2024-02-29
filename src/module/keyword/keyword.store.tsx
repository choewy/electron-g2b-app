import { TableCellProps } from '@mui/material';

import { RecoilStore } from '@core/recoil-store';

import { KeywordDto } from './dto/keyword.dto';
import { KeywordType } from './dto/enums';

export type KeywordsStoreProps = {
  query: { type: KeywordType };
  rows: KeywordDto[];
};

export class KeywordsStore extends RecoilStore<KeywordsStoreProps> {
  useTableColumns(): TableCellProps[] {
    return [
      {
        children: '순번',
        sx: { minWidth: 40 },
        align: 'center',
      },
      {
        children: '키워드',
        sx: { minWidth: 100, width: '100%' },
        align: 'center',
      },
    ];
  }

  useTableRows(): TableCellProps[][] {
    const value = this.useValue();
    const rows: TableCellProps[][] = [];

    for (let i = 0; i < value.rows.length; i++) {
      const keyword = value.rows[i];
      const row: TableCellProps[] = [
        {
          children: i + 1,
          align: 'center',
        },
        { children: keyword.text },
      ];

      rows.push(row);
    }

    return rows;
  }
}

export const keywordsStore = new KeywordsStore({
  query: { type: KeywordType.Include },
  rows: [],
});
