import { Flex } from '@chakra-ui/layout';

import Analytic from '../components/Analytic/Analytic';
import Details from '../components/Details/Details';
import Navbar from '../components/Navbar/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <Flex
      w="100%"
      h="100vh"
      position="relative"
      direction="column"
      bg="#31374E"
    >
      <Navbar />
      <Flex bg="white" w="100%" h="215px" position="absolute">
        <Image layout="fill" alt="bg image" src="/gradient.jpg" />
      </Flex>
      <Analytic />
      <Details />
    </Flex>
  );
}
