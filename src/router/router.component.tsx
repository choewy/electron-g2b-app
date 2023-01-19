import { ReactElement, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { appStore } from '@/store';
import { PageTemplate } from '@/component';
import { RouterProps } from './router.path';

export class RouterComponentClass {
  Routes(): ReactElement {
    appStore.useTitleEffect();

    return (
      <Routes>
        {RouterProps.all.map((router, i) => (
          <Route
            key={`page-${router.path}-${i}`}
            path={router.path}
            element={<PageTemplate>{router.page}</PageTemplate>}
          />
        ))}
      </Routes>
    );
  }

  Navigator(): ReactElement {
    const navigate = useNavigate();
    const goToFunction = useCallback(
      (path: string) => () => {
        navigate(path, { replace: true });
      },
      [navigate],
    );

    return (
      <List>
        {RouterProps.all.map((router, i) => (
          <ListItem key={`navigator-${router.path}-${i}`} disablePadding>
            <ListItemButton onClick={goToFunction(router.path)}>
              <ListItemIcon>{router.icon}</ListItemIcon>
              <ListItemText primary={router.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }
}

export const RouterComponent = new RouterComponentClass();
