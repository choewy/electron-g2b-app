import './index.css';

import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from '@/app';
import { CommonComponent } from './component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <RecoilRoot>
    <Suspense fallback={<CommonComponent.Loader loading={true} />}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
