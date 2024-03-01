import { FunctionComponent } from 'react';

import { PageCenterContainer } from '@component/containers/page-center-container';

import { SignUpForm } from './components/form';
import { SignUpLinks } from './components/links';

export const SignUpPage: FunctionComponent = () => {
  return (
    <PageCenterContainer>
      <SignUpForm />
      <SignUpLinks />
    </PageCenterContainer>
  );
};
