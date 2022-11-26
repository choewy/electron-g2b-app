import { SvgIconComponent } from '@mui/icons-material';
import { LazyExoticComponent } from 'react';

export type RouterMetadata = {
  text: string;
  path: string;
  icon?: SvgIconComponent;
  element?: LazyExoticComponent<any>;
};
