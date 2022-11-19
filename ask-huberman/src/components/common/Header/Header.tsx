import React from 'react';
import {
  Box,
  Flex,
  Image,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { DarkModeSwitch } from '../DarkModeSwitch';
import { Hero } from '../Hero';

export const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={5}
      bg={useColorModeValue('#1C1C1F', '#FFFFFF')}
      color='white'
      {...props}
    >
      <Flex>
        <Image
          fit='contain'
          src='/assets/huberman-transparent.png'
          alt='Andrew Huberman'
        />
      </Flex>
      <Hero title={'Huberman Lab'} />
      <Box
        // display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <DarkModeSwitch />
      </Box>
    </Flex>
  );
};
