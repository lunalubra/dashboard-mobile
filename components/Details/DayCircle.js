import { Button } from '@chakra-ui/button';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';

const DayCircle = ({ number }) => {
  return (
    <Flex
      as={Button}
      maxW="20px"
      size="sm"
      rounded="full"
      justifyContent="center"
      alignItems="center"
      bg="none"
      color="white"
      style={{ backdropFilter: 'saturate(180%) blur(20px)' }}
      _active={{ bg: '#2C2CE7' }}
      _focus={{ bg: '#2C2CE7' }}
      _hover={{ bg: '#2C2CE7' }}
    >
      <Text fontSize="xs">{number}</Text>
    </Flex>
  );
};

export default DayCircle;
