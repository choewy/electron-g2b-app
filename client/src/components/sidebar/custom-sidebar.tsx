import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Drawer, Box } from '@mui/material';
import { useSidebarState } from '@/states';
import { CustomSidebarItemList } from './custom-sidebar-item-list';
import { PrivateRouter, PublicRouter } from '@/routes';
import { useNavigate } from 'react-router-dom';

const CustomSidebar = () => {
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useSidebarState();
  const [open, setOpen] = useState<boolean>(sidebar);

  useEffect(() => {
    setOpen(sidebar);
  }, [sidebar]);

  const onClose = useCallback(
    (e: KeyboardEvent | MouseEvent) => {
      if (
        e.type === 'keydown' &&
        ((e as KeyboardEvent).key === 'Tab' ||
          (e as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setSidebar(false);
    },
    [setSidebar],
  );

  const onClickHandler = useCallback(
    (path: string) => () => {
      setSidebar(false);
      navigate(path, { replace: true });
    },
    [setSidebar, navigate],
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onKeyDown={onClose}>
        <CustomSidebarItemList
          items={PrivateRouter.all()}
          onClickHandler={onClickHandler}
        />
        <CustomSidebarItemList
          items={PublicRouter.all()}
          onClickHandler={onClickHandler}
        />
      </Box>
    </Drawer>
  );
};

export default CustomSidebar;
