import { FC, useCallback } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { RouterProps } from '@/router';
import { firebaseAuth } from '@/core';

export const SignInButtons: FC = () => {
  const navigate = useNavigate();

  const goToSignUpPage = useCallback(() => {
    navigate(RouterProps.SignUp.path, { replace: true });
  }, [navigate]);

  const signInWithGoogle = useCallback(async () => {
    await firebaseAuth.signInWithPopup('google');
  }, []);

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
        로그인
      </Button>
      <Button
        variant="text"
        disableElevation
        fullWidth
        sx={{ marginY: '2px' }}
        onClick={signInWithGoogle}
      >
        구글 계정으로 로그인
      </Button>
      <Button
        variant="text"
        disableElevation
        fullWidth
        sx={{ marginY: '2px' }}
        onClick={goToSignUpPage}
      >
        회원가입
      </Button>
    </Box>
  );
};
