import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';

import ActionVisualizer from './ActionVisualizer';
import TotalStatistics from './TotalStatistics';
import DayPicker from './DayPicker';
import Image from 'next/image';

const Details = () => {
  return (
    <Flex px={5} position="relative" direction="column" bg="#31374E">
      <Box position="relative" zIndex="1">
        <Text fontWeight="semibold" fontSize="md" color="white">
          Abril 2020
        </Text>
        <DayPicker />
        <TotalStatistics />
        <ActionVisualizer />
      </Box>

      <Flex
        position="absolute"
        width="300px"
        height="300px"
        zIndex="0"
        left="75px"
        top="30px"
      >
        <Image layout="fill" src="/gradient_2.png" />
      </Flex>
      <Flex
        position="absolute"
        width="300px"
        height="300px"
        zIndex="0"
        left="-100px"
        top="125px"
      >
        <Image layout="fill" src="/gradient_3.png" />
      </Flex>
      <Flex
        position="absolute"
        width="300px"
        height="300px"
        zIndex="0"
        top="-50px"
        left="-100px"
      >
        <Image layout="fill" src="/gradient_4.png" />
      </Flex>
    </Flex>
  );
};

export default Details;
