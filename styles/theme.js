import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  styles: {
    global: {
      'html, body': {
        overflowX: 'hidden'
      }
    }
  }
});

export default theme;
