import { FunctionComponent } from 'react';

import { SignInPageContainer } from './components/container';
import { SignInForm } from './components/form';

export const SignInPage: FunctionComponent = () => {
  return (
    <SignInPageContainer>
      <SignInForm />
    </SignInPageContainer>
  );
};
