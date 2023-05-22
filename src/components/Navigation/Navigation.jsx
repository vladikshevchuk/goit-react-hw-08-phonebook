import { useAuth } from 'hooks';
import { Box, Link } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box display="flex">
      <Link
        as={RouterLink}
        to="/"
        paddingY="8px"
        paddingX="16px"
        borderRadius="4px"
        color="black"
        fontWeight="500"
        _activeLink={{ color: 'white', backgroundColor: 'orangered' }}
        _hover={{ textDecoration: 'none' }}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          as={RouterLink}
          to="/contacts"
          paddingY="8px"
          paddingX="16px"
          borderRadius="4px"
          color="black"
          fontWeight="500"
          _activeLink={{ color: 'white', backgroundColor: 'orangered' }}
          _hover={{ textDecoration: 'none' }}
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};
