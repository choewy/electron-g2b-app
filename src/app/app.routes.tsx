import { FC } from 'react';
import { Route, Routes } from 'react-router';
import { RouterProps } from '@/router';
import { Box } from '@mui/material';

export const AppRoutes: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box>
        <Routes>
          {RouterProps.all.map((router) => (
            <Route
              key={`router-${router.path}`}
              path={router.path}
              element={router.page}
            />
          ))}
        </Routes>
      </Box>
    </Box>
  );
};
