import './index.css';

import { Settings } from 'luxon';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { appConfig } from '@config/app.config';
import { maintenanceRouter, serviceRouter } from '@router/router';

Settings.defaultZone = appConfig.getTimeZone();

const element = document.getElementById('root');

if (element) {
  ReactDOM.createRoot(element).render(
    <RecoilRoot>
      <RouterProvider router={maintenanceRouter} />
    </RecoilRoot>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
