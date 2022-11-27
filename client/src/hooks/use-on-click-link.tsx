import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useOnClickLink = () => {
  const navigate = useNavigate();

  return useCallback(
    (path: string, replace?: boolean) => () => {
      navigate(path, { replace });
    },
    [navigate],
  );
};
