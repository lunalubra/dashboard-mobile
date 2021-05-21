import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Input
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';
import { SearchIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

const Search = () => {
  const [value, setValue] = useState('');

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          icon={<SearchIcon />}
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
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Input
            variant="unstyled"
            placeholder="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Search;
