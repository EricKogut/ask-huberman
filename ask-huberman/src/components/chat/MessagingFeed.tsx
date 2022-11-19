import { useState } from 'react';
import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  Text,
  Textarea,
  SimpleGrid,
  useColorModeValue,
  InputRightElement,
  Button,
  Input,
  InputGroup,
} from '@chakra-ui/react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

const testimonials = [
  {
    name: 'Andrew Huberman.',
    role: 'Associate Professor of Neurobiology',
    content:
      "Hi. I'm Andrew Huberman and I'm a professor of Neurobiology and Ophthalmology. Feel free to ask me a question...",
    avatar: '/assets/headshot.jpg',
  },
];

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
];

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar, index } = props;

  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}
    >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
      >
        <chakra.p fontWeight={'medium'} fontSize={'15px'} pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontWeight={'bold'} fontSize={14}>
          {name}
          <chakra.span fontWeight={'medium'} color={'gray.500'}>
            {' '}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
  );
}

export function MessagingFeed() {
  const [value, setValue] = useState('');
  const handleChange = (event) => setValue(event.target.value);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        mb={20}
      >
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h3
            fontWeight={'bold'}
            fontSize={20}
            textTransform={'uppercase'}
          >
            HUBERMAN AI
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}
          >
            Ask Dr. Huberman a question
          </chakra.h1>
          <chakra.h2
            margin={'auto'}
            width={'70%'}
            fontWeight={'medium'}
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            This Huberman bot was trained on{' '}
            <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
              50+
            </chakra.strong>{' '}
            podcasts to answer your questions.
          </chakra.h2>
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 1 }}
          spacing={'4'}
          mt={16}
          mx={'auto'}
        >
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              placeholder='Enter your question'
              maxWidth='40rem'
              onChange={handleChange}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm'>
                {' '}
                Send
              </Button>
            </InputRightElement>
          </InputGroup>
        </SimpleGrid>{' '}
      </Flex>
    </>
  );
}
