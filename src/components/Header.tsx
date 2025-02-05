import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Box as="header" p={4} bg="teal.500" color="white">
      <Text fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
};

export default Header;
