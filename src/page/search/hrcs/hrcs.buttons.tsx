import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { hrcsSearchStore } from '@/store';

export const HrcsSearchButtons: FC = () => {
  const onSearch = hrcsSearchStore.useSearchCallback();

  return (
    <Box
      display="flex"
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Button variant="contained" onClick={onSearch} disableElevation>
        검색
      </Button>
    </Box>
  );
};
