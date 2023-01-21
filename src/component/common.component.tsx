import { Fragment, PropsWithChildren, ReactElement } from 'react';
import {
  AppBar,
  Backdrop,
  Box,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { appStore } from '@/store';
import { Helmet } from 'react-helmet-async';

export class CommonComponentClass {
  Helmet(): ReactElement {
    return (
      <Helmet>
        <title>조달청 입찰 공고</title>
      </Helmet>
    );
  }

  Header(): ReactElement {
    const { title } = appStore.useValue();
    const openSidebar = appStore.useSetSidebar(true);

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={openSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  Sidebar(props: { item: ReactElement }): ReactElement {
    const { isOpenSidebar } = appStore.useValue();
    const closeSidebar = appStore.useSetSidebar(false);

    return (
      <Drawer anchor={'left'} open={isOpenSidebar} onClose={closeSidebar}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={closeSidebar}
          onKeyDown={closeSidebar}
        >
          {props.item}
          <Divider />
        </Box>
      </Drawer>
    );
  }

  Loader(props: PropsWithChildren & { loading: boolean }): ReactElement {
    return (
      <Fragment>
        <Backdrop
          sx={{ color: 'skyblue', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={props.loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {props.children}
      </Fragment>
    );
  }

  Page(props: PropsWithChildren): ReactElement {
    appStore.useTitleEffect();

    return <Fragment>{props.children}</Fragment>;
  }
}

export const CommonComponent = new CommonComponentClass();
