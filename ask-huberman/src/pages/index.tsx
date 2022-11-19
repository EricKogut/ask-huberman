import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Heading,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Hero } from '../components/common/Hero';
import { Container } from '../components/common/Container';
import { Main } from '../components/common/Main';
import { DarkModeSwitch } from '../components/common/DarkModeSwitch';
import { CTA } from '../components/common/CTA';
import { Footer } from '../components/common/Footer';
import { ModelCanvas } from '../components/3d/ModelCanvas';
import { OrbitControls } from '@react-three/drei';

const Index = () => (
  <Container height='100vh'>
    <Hero title='Ask Huberman' />

    <Main>
      <Text color='text'>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
        <Code>TypeScript</Code>.
      </Text>
      <ModelCanvas />
      <Heading>List to the latest episode</Heading>
      <iframe
        src='https://open.spotify.com/embed/show/79CkJF3UJTHFV8Dse3Oy0P?utm_source=generator'
        width='100%'
        height='152'
        frameBorder='0'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
      <List spacing={3} my={0} color='text'>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          <ChakraLink
            isExternal
            href='https://chakra-ui.com'
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          <ChakraLink isExternal href='https://nextjs.org' flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
