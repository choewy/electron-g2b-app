import { FC } from 'react';
import { RouterNavigators } from '@/router';
import { appStore, authStore } from '@/store';
import { Box, Drawer } from '@mui/material';
import { RouterProps } from '@/router';

export const AppDrawer: FC = () => {
  const { isOpenSidebar } = appStore.useValue();
  const closeSidebar = appStore.useSetSidebar(false);
  const user = authStore.useAuth();

  return (
    <Drawer anchor={'left'} open={isOpenSidebar} onClose={closeSidebar}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={closeSidebar}
        onKeyDown={closeSidebar}
      >
        {Object.entries(RouterProps.selectMapByAuth(user)).map(
          ([key, routerProps]) => (
            <RouterNavigators
              key={`router-navigators-${key}`}
              routerProps={routerProps.filter(
                (props) => !props.hiddenInSidebar,
              )}
            />
          ),
        )}
      </Box>
    </Drawer>
  );
};
