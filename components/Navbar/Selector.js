import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

const Selector = () => {
  const [value, setValue] = useState('Hotel Ibiza');

  return (
    <Menu>
      <MenuButton
        as={Button}
        w="100%"
        mx={2}
        rightIcon={<ChevronDownIcon />}
        variant="outline"
        color="white"
        border="none"
        css={{ backdropFilter: 'saturate(180%) blur(20px)' }}
        _focus={{ bg: '#2C2CE7' }}
        _hover={{
          opacity: '0.60',
          bg: '#2C2CE7'
        }}
        _active={{
          opacity: '0.80',
          transform: 'scale(0.95)',
          boxShadow: 'lg',
          bg: '#2C2CE7'
        }}
      >
        {value}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setValue('Hotel Ibiza')}>Hotel Ibiza</MenuItem>
        <MenuItem onClick={() => setValue('Piso Valencia')}>
          Piso Valencia
        </MenuItem>
        <MenuItem onClick={() => setValue('Chalet Barcelona')}>
          Chalet Barcelona
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Selector;
