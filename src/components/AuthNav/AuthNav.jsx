import { Link } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Link
        as={RouterLink}
        to="/register"
        paddingY="8px"
        paddingX="16px"
        borderRadius="4px"
        color="black"
        fontWeight="500"
        _activeLink={{ color: 'white', backgroundColor: 'orangered' }}
        _hover={{ textDecoration: 'none' }}
      >
        Register
      </Link>
      <Link
        as={RouterLink}
        to="/login"
        paddingY="8px"
        paddingX="16px"
        borderRadius="4px"
        color="black"
        fontWeight="500"
        _activeLink={{ color: 'white', backgroundColor: 'orangered' }}
        _hover={{ textDecoration: 'none' }}
      >
        Login
      </Link>
    </div>
  );
};
