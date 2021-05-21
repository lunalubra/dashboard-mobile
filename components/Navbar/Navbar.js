import { Flex } from '@chakra-ui/layout';
import React from 'react';

import Hamburger from './Hamburger';
import Selector from './Selector';
import Search from './Search';

const Navbar = () => {
  return (
    <Flex
      w="100%"
      p={2}
      position="sticky"
      top={0}
      zIndex="999"
      justifyContent="space-between"
    >
      <Hamburger />
      <Selector />
      <Search />
    </Flex>
  );
};

export default Navbar;
