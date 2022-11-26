import { FC } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { RouterMetadata } from '@/routes';

type Props = RouterMetadata & {
  onClickHandler: (path: string) => () => void;
};

export const CustomSidebarItem: FC<Props> = ({
  path,
  text,
  icon: SvgIcon,
  onClickHandler,
}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickHandler(path)}>
        {SvgIcon && <ListItemIcon>{<SvgIcon />}</ListItemIcon>}
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
