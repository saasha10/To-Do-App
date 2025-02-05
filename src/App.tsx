import './App.css';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Header title='To-Do List' />
    </ChakraProvider>
  );
}

export default App;
