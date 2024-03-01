import { FunctionComponent } from 'react';

import { PageCenterContainer } from '@component/containers/page-center-container';
import { SignInForm } from './components/form';
import { SignInLinks } from './components/links';

export const SignInPage: FunctionComponent = () => {
  return (
    <PageCenterContainer>
      <SignInForm />
      <SignInLinks />
    </PageCenterContainer>
  );
};
