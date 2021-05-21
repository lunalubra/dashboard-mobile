import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react';
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon
} from '@chakra-ui/icons';

import React from 'react';

const Hamburger = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        border="none"
        color="white"
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
        css={{ backdropFilter: 'saturate(180%) blur(20px)' }}
      />
      <MenuList>
        <MenuItem icon={<AddIcon />}>Action 1</MenuItem>
        <MenuItem icon={<ExternalLinkIcon />}>Action 2</MenuItem>
        <MenuItem icon={<RepeatIcon />}>Action 3</MenuItem>
        <MenuItem icon={<EditIcon />}>Action 4</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Hamburger;
