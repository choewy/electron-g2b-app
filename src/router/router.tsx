import { createBrowserRouter } from 'react-router-dom';

import { App } from '@app/app';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <div>HOME</div>,
      },
    ],
  },
]);
