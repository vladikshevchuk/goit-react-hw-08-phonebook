import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};
