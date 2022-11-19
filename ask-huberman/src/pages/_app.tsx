import { ChakraProvider } from '@chakra-ui/react';
import Amplify, { Auth } from 'aws-amplify';

import theme from '../theme';
import { AppProps } from 'next/app';
import '../routes/routes.config';

import { withNextRouter } from '@nx/next-router';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default withNextRouter(MyApp);
