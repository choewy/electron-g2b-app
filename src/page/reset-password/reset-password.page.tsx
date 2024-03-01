import { FunctionComponent } from 'react';

import { Typography } from '@mui/material';

import { PageCenterContainer } from '@component/containers/page-center-container';

import { ResetPasswordForm } from './components/form';
import { ResetPasswordLinks } from './components/links';

export const ResetPasswordPage: FunctionComponent = () => {
  return (
    <PageCenterContainer>
      <Typography variant="h6" sx={{ fontWeight: 300, marginY: '20px', color: 'GrayText' }} textAlign="center">
        비밀번호 재설정을 위해 발급한 임시 비밀번호를 메일로 전달드립니다.
      </Typography>
      <ResetPasswordForm />
      <ResetPasswordLinks />
    </PageCenterContainer>
  );
};
