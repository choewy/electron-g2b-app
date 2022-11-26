import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
};

const CustomHelmet: FC<Props> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default CustomHelmet;
