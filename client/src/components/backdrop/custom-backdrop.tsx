import { FC, useEffect } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useLoadingState } from '@/states';

const CustomBackdrop: FC = () => {
  const [loading, setLoading] = useLoadingState();

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [loading, setLoading]);

  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default CustomBackdrop;
