import { FC, useCallback } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { RouterProps } from '@/router';

export const SignUpButtons: FC = () => {
  const navigate = useNavigate();

  const goToSignInage = useCallback(() => {
    navigate(RouterProps.SignIn.path, { replace: true });
  }, [navigate]);

  return (
    <Box
      sx={{
        width: '100%',
        minWidth: '220px',
        maxWidth: '320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        type="submit"
        variant="contained"
        disableElevation
        fullWidth
        sx={{ marginY: '2px' }}
      >
        회원가입
      </Button>
      <Button
        variant="text"
        disableElevation
        fullWidth
        sx={{ marginY: '2px' }}
        onClick={goToSignInage}
      >
        로그인 페이지로 이동
      </Button>
    </Box>
  );
};
