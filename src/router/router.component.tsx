import { Fragment, ReactElement, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { appStore } from '@/store';
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
            element={router.page}
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
      <Fragment>
        <List>
          {RouterProps.global.map((router, i) => (
            <ListItem
              key={`navigator-global-${router.path}-${i}`}
              disablePadding
            >
              <ListItemButton onClick={goToFunction(router.path)}>
                <ListItemIcon>{router.icon}</ListItemIcon>
                <ListItemText primary={router.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {RouterProps.common.map((router, i) => (
            <ListItem
              key={`navigator-common-${router.path}-${i}`}
              disablePadding
            >
              <ListItemButton onClick={goToFunction(router.path)}>
                <ListItemIcon>{router.icon}</ListItemIcon>
                <ListItemText primary={router.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {RouterProps.private.map((router, i) => (
            <ListItem
              key={`navigator-private-${router.path}-${i}`}
              disablePadding
            >
              <ListItemButton onClick={goToFunction(router.path)}>
                <ListItemIcon>{router.icon}</ListItemIcon>
                <ListItemText primary={router.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Fragment>
    );
  }
}

export const RouterComponent = new RouterComponentClass();
