import { useSetLoading } from '@/states';
import { FC, useEffect } from 'react';

const CustomFallback: FC = () => {
  const setLoading = useSetLoading();

  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  return <></>;
};

export default CustomFallback;
