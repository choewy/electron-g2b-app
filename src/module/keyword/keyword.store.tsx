import { Box, IconButton, TableCellProps, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import { RecoilStore } from '@core/recoil-store';

import { KeywordDto } from './dto/keyword.dto';
import { KeywordType } from './dto/enums';

export type KeywordsStoreProps = {
  query: { type: KeywordType };
  rows: KeywordDto[];
  dialog: {
    create: { open: boolean };
    update: { id: number; open: boolean };
    delete: { id: number; open: boolean };
  };
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
    const [value, setState] = this.useState();
    const rows: TableCellProps[][] = [];

    for (let i = 0; i < value.rows.length; i++) {
      const keyword = value.rows[i];
      const row: TableCellProps[] = [
        {
          children: i + 1,
          align: 'center',
        },
        {
          children: (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: 12 }}>{keyword.text}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'center', alignItems: 'center' }}>
                <IconButton
                  size="small"
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      dialog: { ...prev.dialog, update: { id: keyword.id, open: true } },
                    }))
                  }
                >
                  <Edit sx={{ fontSize: 14 }} />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      dialog: { ...prev.dialog, delete: { id: keyword.id, open: true } },
                    }))
                  }
                >
                  <Delete sx={{ fontSize: 14 }} />
                </IconButton>
              </Box>
            </Box>
          ),
        },
      ];

      rows.push(row);
    }

    return rows;
  }
}

export const keywordsStore = new KeywordsStore({
  query: { type: KeywordType.Include },
  rows: [],
  dialog: {
    create: { open: false },
    update: { id: 0, open: false },
    delete: { id: 0, open: false },
  },
});
