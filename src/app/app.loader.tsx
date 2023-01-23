import { FC, Fragment } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { appStore } from '@/store';

export const AppLoader: FC = () => {
  const { loading } = appStore.useValue();

  return (
    <Fragment>
      <Backdrop
        sx={{ color: 'skyblue', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Fragment>
  );
};
