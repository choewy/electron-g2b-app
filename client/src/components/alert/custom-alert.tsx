import { AlertStore, useAlertState } from '@/states';
import { Alert, AlertColor, Snackbar } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';

const CustomAlert: FC = () => {
  const [alert, setAlert] = useAlertState();
  const [open, setOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<AlertColor | null>(null);
  const [message, setMessage] = useState<string>('');

  const onClose = useCallback(() => {
    setOpen(false);

    setTimeout(() => {
      setAlert({
        info: '',
        error: '',
        success: '',
        warning: '',
      });
    }, 200);
  }, [setAlert]);

  useEffect(() => {
    const row = Object.entries(alert).find(([_, value]) => value);

    if (row) {
      const [key, value] = row;
      setMessage(value);
      setSeverity(key as keyof AlertStore);
      setOpen(true);

      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [alert, setOpen, onClose]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      sx={{ top: 25 }}
      open={open}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={severity || 'info'}
        sx={{
          minWidth: '330px',
          maxWidth: '330px',
          width: '100%',
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
