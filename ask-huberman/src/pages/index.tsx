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
import { Hero } from '../components/common/Hero';
import { Container } from '../components/common/Container';
import { Main } from '../components/common/Main';
import { DarkModeSwitch } from '../components/common/DarkModeSwitch';
import { CTA } from '../components/common/CTA';
import { Footer } from '../components/common/Footer';
import { ModelCanvas } from '../components/3d/ModelCanvas';

import { Header } from '../components/common/Header';

const Index = () => (
  <>
    <Header />
    <Container height='100vh'>
      <Hero title='Ask Huberman' />

      <Main>
        <ModelCanvas />
        <Heading>Link to the latest episode</Heading>
        <iframe
          src='https://open.spotify.com/embed/show/79CkJF3UJTHFV8Dse3Oy0P?utm_source=generator'
          width='100%'
          height='152'
          frameBorder='0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
      </Main>

      <DarkModeSwitch />
      <Footer></Footer>
      <CTA />
    </Container>
  </>
);

export default Index;
