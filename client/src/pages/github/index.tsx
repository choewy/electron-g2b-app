import { CommonRouter } from '@/routes';
import { FC, useEffect } from 'react';

const GitHubHref: FC = () => {
  useEffect(() => {
    window.open(CommonRouter.GitHub.path);
  }, []);

  return <></>;
};

export default GitHubHref;
