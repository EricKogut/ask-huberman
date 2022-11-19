import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
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
import { Model } from '../components/3d/model';
import { OrbitControls } from '@react-three/drei';

const Index = () => (
  <Container height='100vh'>
    {/* <Hero /> */}

    <Suspense fallback={'loading'}>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: '#111a21',
          width: '100vw',
          height: '100vh',
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 0]} /> /* highlight-line */
        </Suspense>
        <OrbitControls />
      </Canvas>
    </Suspense>

    <Main>
      <Text color='text'>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
        <Code>TypeScript</Code>.
      </Text>

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
