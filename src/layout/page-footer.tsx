import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { GitHub } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { appConfig } from '@config/app.config';

export const PageFooter: FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1px',
        marginTop: 1,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3px' }}>
        <Link
          to="https://github.com/choewy"
          target="_blank"
          style={{ display: 'flex', textDecoration: 'none', color: 'GrayText', alignItems: 'center' }}
        >
          <GitHub />
        </Link>

        <Typography color="GrayText" variant="body2" component="div">
          {appConfig.getEnvText()} Version {appConfig.getVersion()}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Link
          to="https://github.com/choewy"
          target="_blank"
          style={{ display: 'flex', textDecoration: 'none', alignItems: 'center' }}
        >
          <img
            width={70}
            alt="visits"
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fg2b.stdte.click&count_bg=%23C60026&title_bg=%23BEBEBE&icon=&icon_color=%23DADADA&title=visits&edge_flat=false"
          />
        </Link>
      </Box>
    </Box>
  );
};
