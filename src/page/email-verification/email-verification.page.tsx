import { FunctionComponent } from 'react';

import { Typography } from '@mui/material';

import { PageCenterContainer } from '@component/containers/page-center-container';

import { EmailVerificationForm } from './components/form';
import { SendVerifyEmailButton } from './components/button';
import { EmailVerificationLinks } from './components/links';

export const EmailVerificationPage: FunctionComponent = () => {
  return (
    <PageCenterContainer>
      <Typography variant="h6" sx={{ fontWeight: 300, marginY: '20px', color: 'GrayText' }} textAlign="center">
        서비스를 이용하려면 이메일 인증을 완료해야 합니다.
      </Typography>
      <EmailVerificationForm />
      <SendVerifyEmailButton />
      <EmailVerificationLinks />
    </PageCenterContainer>
  );
};
