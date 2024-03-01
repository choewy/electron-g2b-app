import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { GitHub } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { appConfig } from '@config/app.config';

export const PageFooter: FunctionComponent = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3px' }}>
      <Link to="https://github.com/choewy" target="_blank" style={{ textDecoration: 'none', color: 'GrayText' }}>
        <GitHub />
      </Link>
      <Typography color="GrayText" variant="body2" component="div">
        {appConfig.getEnvText()} Version {appConfig.getVersion()}
      </Typography>
    </Box>
  );
};
