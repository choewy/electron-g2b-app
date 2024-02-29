import { FunctionComponent } from 'react';

import { SignUpPageContainer } from './components/container';
import { SignUpForm } from './components/form';

export const SignUpPage: FunctionComponent = () => {
  return (
    <SignUpPageContainer>
      <SignUpForm />
    </SignUpPageContainer>
  );
};
