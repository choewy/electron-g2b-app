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
    (path: string) => () => {
      navigate(path, { replace: true });
    },
    [navigate],
  );

  return (
    <Fragment>
      <List>
        {routerProps.map((router) => (
          <ListItem key={`navigator-${router.path}`} disablePadding>
            <ListItemButton onClick={navigationCallback(router.path)}>
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
