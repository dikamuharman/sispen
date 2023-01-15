import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import WithSubnavigation from './components/navbar';

function App() {
  return (
    <>
      <WithSubnavigation />
      <Container as="main" maxWidth="5xl">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
