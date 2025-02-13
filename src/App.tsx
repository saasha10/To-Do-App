import './App.css';
import { ChakraProvider, defaultSystem, Flex, Heading, Wrap, Button } from '@chakra-ui/react';
import Header from './components/Header';
import { Input } from "@chakra-ui/react"
import { CheckboxCard } from './components/ui/checkbox-card';
import styled from 'styled-components';
import { useState } from 'react';

interface Item {
  id: string,
  title: string
}

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const List = styled(Wrap)`
  padding-top: 1rem;
`;

function App() {
  const [toDoList, setToDoList] = useState<Item[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const cleanNewTaskTitle = () => setNewTaskTitle("");

  const handleAddTask = () => {
    const newTask: Item = {
      id: Date.now().toString(),
      title: newTaskTitle!
    };

    setToDoList(prevState => [...prevState, newTask]);
    cleanNewTaskTitle();
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <Header title='To-Do List' />
      <Flex>
        <Wrapper>
          <Heading>Add a new task</Heading>
          <Input placeholder="Enter your task" maxW={"300px"} value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} />
          <Button onClick={handleAddTask} disabled={!newTaskTitle}>Add task</Button>
        </Wrapper>
        <List>
          {toDoList.length > 0 && (
            toDoList.map(item => (
              <CheckboxCard key={item.id} label={item.title} size='sm' />
            ))
          )}
        </List>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
