import { bidSearchApi } from '@/apis';
import { FC, Fragment, useCallback, useEffect } from 'react';

const App: FC = () => {
  const search = useCallback(async () => {
    const data = await bidSearchApi.search();
    console.log(data.response.body);
  }, []);

  useEffect(() => {
    search();
  }, [search]);

  return <Fragment>APP</Fragment>;
};

export default App;
