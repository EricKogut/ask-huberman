import { Link as ChakraLink, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Container } from './Container';

export const CTA = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
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
        href=''
        variant='outline'
        colorScheme='white'
        rounded='button'
        flexGrow={1}
        mx={2}
        width='full'
        onClick={() => router.push('/chatwithhuberman')}
      >
        Talk Now
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
};
