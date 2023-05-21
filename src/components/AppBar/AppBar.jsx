import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { Box } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="12px"
      paddingY="8px"
      paddingX="0"
      mb="16px"
      borderBottom="1px"
      borderColor="black"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
