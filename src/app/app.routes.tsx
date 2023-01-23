import { FC } from 'react';
import { Route, Routes } from 'react-router';
import { RouterProps } from '@/router';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      {RouterProps.all.map((router) => (
        <Route
          key={`router-${router.path}`}
          path={router.path}
          element={router.page}
        />
      ))}
    </Routes>
  );
};
