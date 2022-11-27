import { useUserValue } from '@/states';
import { Avatar, Box, TextField } from '@mui/material';
import { FC } from 'react';

const MyPage: FC = () => {
  const user = useUserValue();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Avatar src={user.imagePath} />
      <TextField
        type="text"
        label="이름"
        variant="standard"
        sx={{
          my: 2,
          width: '300px',
        }}
        InputProps={{
          readOnly: true,
        }}
        value={user.name}
      />
      <TextField
        type="text"
        label="이메일"
        variant="standard"
        sx={{
          my: 2,
          width: '300px',
        }}
        InputProps={{
          readOnly: true,
        }}
        value={user.email}
      />
    </Box>
  );
};

export default MyPage;
