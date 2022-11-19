import { Link as ChakraLink, Button } from '@chakra-ui/react';

import { Container } from './Container';

export const CTA = () => (
  <Container
    flexDirection='row'
    position='fixed'
    bottom={0}
    width='full'
    maxWidth='3xl'
    py={3}
  >
    <Button
      as={ChakraLink}
      isExternal
      href=''
      variant='outline'
      colorScheme='white'
      rounded='button'
      flexGrow={1}
      mx={2}
      width='full'
    >
      temp
    </Button>
    <Button
      as={ChakraLink}
      isExternal
      href='https://www.hubermanlab.com'
      variant='solid'
      colorScheme='gray'
      rounded='button'
      flexGrow={3}
      mx={2}
      width='full'
    >
      Huberman Lab Wesbite
    </Button>
  </Container>
);
