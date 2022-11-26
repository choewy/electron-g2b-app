import { FC, Fragment } from 'react';
import { Divider, List } from '@mui/material';

import { CustomSidebarItem } from './custom-sidebar-item';
import { RouterMetadata } from '@/routes';

type Props = {
  items: RouterMetadata[];
  onClickHandler: (path: string) => () => void;
};

export const CustomSidebarItemList: FC<Props> = ({ items, onClickHandler }) => {
  return (
    <Fragment>
      <List>
        {items.map((router) => (
          <CustomSidebarItem
            key={JSON.stringify(router)}
            {...router}
            onClickHandler={onClickHandler}
          />
        ))}
      </List>
      <Divider />
    </Fragment>
  );
};
