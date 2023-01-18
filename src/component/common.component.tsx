import { HomePage, SettingPage } from '@/page';
import { FC, ReactElement } from 'react';
import { NavigateFunction, Route, Routes } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon, Mail as MailIcon } from '@mui/icons-material';

import { appStore } from '@/store';

export class CommonComponentClass {
  public Header(): ReactElement {
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

  /** @TODO fix */
  SidebarItem(): ReactElement {
    return (
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{<MailIcon />}</ListItemIcon>
            <ListItemText primary="mail" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{<MailIcon />}</ListItemIcon>
            <ListItemText primary="mail" />
          </ListItemButton>
        </ListItem>
      </List>
    );
  }

  public Sidebar(props: { item: ReactElement }): ReactElement {
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

  public Router(): ReactElement {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    );
  }
}

export const CommonComponent = new CommonComponentClass();
