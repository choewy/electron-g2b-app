import { localStorageService } from '@/core';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FC, Fragment, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { RouterPropsType } from './types';

export const RouterNavigators: FC<{ routerProps: RouterPropsType[] }> = ({
  routerProps,
}) => {
  const navigate = useNavigate();
  const navigationCallback = useCallback(
    (router: RouterPropsType) => () => {
      if (router.openNewWindow && router.url) {
        return window.open(router.url);
      }

      localStorageService.setPath(router.path);
      navigate(router.path, { replace: true });
    },
    [navigate],
  );

  return (
    <Fragment>
      <List>
        {routerProps.map((router) => (
          <ListItem key={`navigator-${router.path}`} disablePadding>
            <ListItemButton onClick={navigationCallback(router)}>
              <ListItemIcon>{router.icon}</ListItemIcon>
              <ListItemText primary={router.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Fragment>
  );
};
