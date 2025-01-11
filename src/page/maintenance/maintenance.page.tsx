import { PageCenterContainer } from '@component/containers/page-center-container';
import { Typography } from '@mui/material';
import { FunctionComponent } from 'react';

export const MainTenancePage: FunctionComponent = () => {
  return (
    <PageCenterContainer>
      <Typography variant="h6" sx={{ fontWeight: 400, marginY: '20px', color: 'GrayText' }} textAlign="center">
        조달청 API 버전 업그레이드로 인한 서버 점검 중입니다.
      </Typography>
    </PageCenterContainer>
  );
};
