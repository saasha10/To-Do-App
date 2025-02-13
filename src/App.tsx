import './App.css';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import Header from './components/Header';
import { Input, Flex } from "@chakra-ui/react"
import { CheckboxCard } from './components/ui/checkbox-card';


function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Header title='To-Do List' />
      <Input placeholder="Enter your task" />
      <Flex>
        <CheckboxCard label="Create app using Next.js" maxW="240px" size="sm" />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
