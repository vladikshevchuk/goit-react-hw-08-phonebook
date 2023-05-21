import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from '@chakra-ui/react';

export const SharedLayout = () => {
  return (
    <Box
      maxWidth="960px"
      marginY="0"
      marginX="auto"
      paddingY="0"
      paddingX="16px"
    >
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
