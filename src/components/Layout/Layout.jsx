import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Wrapper } from './Layout.styled';
import { Loader } from '../Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />{' '}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
