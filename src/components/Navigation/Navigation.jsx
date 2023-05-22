import { useAuth } from 'hooks';
import { Box } from '@chakra-ui/react';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box display="flex">
      <Link
        to="/"
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          to="/contacts"
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};
