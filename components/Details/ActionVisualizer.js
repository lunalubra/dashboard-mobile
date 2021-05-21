import { Button } from '@chakra-ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text
} from '@chakra-ui/react';
import React from 'react';

const clients = [
  {
    name: 'Victoria Hansen',
    plataform: 'Booking.com',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    name: 'Bryan Anderson',
    plataform: 'Reserva web',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

const ActionVisualizer = () => {
  return (
    <Accordion defaultIndex={[1]} allowMultiple>
      {clients.map((client, clientid) => (
        <AccordionItem key={clientid} bg="white" my={5} rounded="7">
          <h2>
            <AccordionButton
              as={Button}
              _active={{ bg: '#2C2CE7', color: 'white' }}
              _focus={{ bg: '#2C2CE7', color: 'white' }}
              _hover={{ bg: '#2C2CE7', color: 'white' }}
              style={{ backdropFilter: 'saturate(180%) blur(20px)' }}
              bg="none"
              color="black"
            >
              <Box flex="1" textAlign="left">
                <Text>{client.name}</Text>
                <Text fontSize="xs" color="gray.400">
                  {client.plataform}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{client.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ActionVisualizer;
