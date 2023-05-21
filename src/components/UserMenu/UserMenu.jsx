import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box, Text, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center" gap="12px">
      <Text fontWeight="700">Welcome, {user.name}</Text>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        colorScheme="blue"
      >
        Logout
      </Button>
    </Box>
  );
};
