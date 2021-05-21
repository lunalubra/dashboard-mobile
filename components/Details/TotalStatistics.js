import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { Button } from '@chakra-ui/button';

const TotalStatistics = () => {
  return (
    <Flex my={5} justifyContent="space-between">
      <Flex
        px={4}
        as={Button}
        _active={{ bg: '#2C2CE7' }}
        _focus={{ bg: '#2C2CE7' }}
        _hover={{ bg: '#2C2CE7' }}
        style={{ backdropFilter: 'saturate(180%) blur(20px)' }}
        bg="none"
        color="white"
        direction="column"
        alignItems="center"
        rounded={7}
      >
        <Text fontSize="xs" as="u">
          Entradas
        </Text>
        <Text fontWeight="semibold">2</Text>
      </Flex>
      <Flex
        px={4}
        as={Button}
        _active={{ bg: '#2C2CE7' }}
        _focus={{ bg: '#2C2CE7' }}
        _hover={{ bg: '#2C2CE7' }}
        style={{ backdropFilter: 'saturate(180%) blur(20px)' }}
        bg="none"
        color="white"
        direction="column"
        alignItems="center"
        rounded={7}
      >
        <Text fontSize="xs" as="u">
          Salidas
        </Text>
        <Text fontWeight="semibold">2</Text>
      </Flex>
      <Flex
        px={4}
        as={Button}
        _active={{ bg: '#2C2CE7' }}
        _focus={{ bg: '#2C2CE7' }}
        _hover={{ bg: '#2C2CE7' }}
        style={{ backdropFilter: 'saturate(180%) blur(20px)' }}
        bg="none"
        color="white"
        direction="column"
        alignItems="center"
        rounded={7}
      >
        <Text fontSize="xs" as="u">
          Alojados
        </Text>
        <Text fontWeight="semibold">4</Text>
      </Flex>
    </Flex>
  );
};

export default TotalStatistics;
