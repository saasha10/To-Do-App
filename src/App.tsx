import React from 'react';
import './App.css';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <div>
        <header className="App-header">
          <p className="title">
            To-Do List
          </p>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
