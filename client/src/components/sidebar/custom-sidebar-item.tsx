import { FC } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { RouterMetadata } from '@/routes';

type Props = RouterMetadata & {
  onClickHandler: (path: string, open?: boolean) => () => void;
};

export const CustomSidebarItem: FC<Props> = ({
  path,
  text,
  icon: SvgIcon,
  open,
  onClickHandler,
}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickHandler(path, open)}>
        {SvgIcon && <ListItemIcon>{<SvgIcon />}</ListItemIcon>}
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
