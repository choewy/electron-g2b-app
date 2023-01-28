import { FC, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { RouterProps } from '@/router';
import { sessionStorageService } from '@/core';

export const NotFoundPage: FC = () => {
  useEffect(() => {
    sessionStorageService.resetPath();
  }, []);

  return <Navigate to={RouterProps.Home.path} />;
};
