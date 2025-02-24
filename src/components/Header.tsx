import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

const Header: FC = () => {
  return (
    <Box as="header" p={4} bg="teal.500" color="white">
      <Text fontSize="2xl" fontWeight="bold">
        To-Do List
      </Text>
    </Box>
  );
};

export default Header;
