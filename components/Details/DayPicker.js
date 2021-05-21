import { IconButton } from '@chakra-ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import DayCircle from './DayCircle';

const days = [
  { number: 28, name: 'domingo' },
  { number: 29, name: 'lunes' },
  { number: 30, name: 'martes' },
  { number: 31, name: 'miércoles' },
  { number: 1, name: 'jueves' },
  { number: 2, name: 'viernes' },
  { number: 3, name: 'sabado' }
];

const DayPicker = () => {
  return (
    <Stack
      my={5}
      ml="-3"
      direction="row"
      alignItems="center"
      alignSelf="center"
    >
      <ArrowLeftIcon
        color="white"
        boxSize={2}
        position="relative"
        bottom={-2}
      />
      {days.map((day, dayid) => (
        <Flex key={dayid} direction="column" alignItems="center">
          <Text fontSize="xs" color="white">{`${day.name
            .charAt(0)
            .toUpperCase()}${day.name.substring(1, 3)}`}</Text>
          <DayCircle number={day.number} />
        </Flex>
      ))}
      <ArrowRightIcon
        color="white"
        boxSize={2}
        position="relative"
        bottom={-2}
      />
    </Stack>
  );
};

export default DayPicker;
