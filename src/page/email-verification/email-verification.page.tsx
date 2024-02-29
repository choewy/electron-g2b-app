import { FunctionComponent } from 'react';

import { Typography } from '@mui/material';

import { PageCenterContainer } from '@component/containers/page-center-container';

import { VerifyEmailForm } from './components/verify-email-form';
import { SendVerifyEmailButton } from './components/send-verify-email-button';

export const EmailVerificationPage: FunctionComponent = () => {
  return (
    <PageCenterContainer>
      <Typography variant="h6" sx={{ fontWeight: 300, marginY: '20px', color: 'GrayText' }} textAlign="center">
        서비스를 이용하려면 이메일 인증을 완료해야 합니다.
      </Typography>
      <VerifyEmailForm />
      <SendVerifyEmailButton />
    </PageCenterContainer>
  );
};
