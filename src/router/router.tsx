import { SettingPage } from '@/page';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/setting" element={<SettingPage />} />
    </Routes>
  );
};
