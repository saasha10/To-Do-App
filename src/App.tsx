import './App.css';
import { ChakraProvider, defaultSystem, Flex, Heading, Wrap, Button, Text } from '@chakra-ui/react';
import Header from './components/Header';
import { Input } from "@chakra-ui/react"
import { DeleteFilled, CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useState, KeyboardEvent } from 'react';

interface Item {
  id: string,
  title: string,
  completed: boolean
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

const TaskItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    width: 150px;
    height: 60px;
    border: 1px solid lightgrey;
    border-radius: 8px;

    &:hover{
      background-color: #c9e2e0ee;
    }
`;

function App() {
  const [toDoList, setToDoList] = useState<Item[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const handleKeyPressed = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && newTaskTitle !== ''){
      handleAddTask();
    }
  }

  const cleanNewTaskTitle = () => setNewTaskTitle("");

  const handleAddTask = () => {
    const newTask: Item = {
      id: Date.now().toString(),
      title: newTaskTitle,
      completed: false
    };

    setToDoList(prevState => [...prevState, newTask]);
    cleanNewTaskTitle();
  };

  const handleCompletedTask = (id: string) => {
    const toDoListUpdated: Item[] = toDoList.map(item => {
      if(item.id === id){
        return ({
          ...item,
          completed: !item.completed
        })
      }
      return item;
    });
    setToDoList(toDoListUpdated);
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <Header title='To-Do List' />
      <Flex>
        <Wrapper>
          <Heading>Add a new task</Heading>
          <Input 
            placeholder="Enter your task" 
            maxW={"300px"} 
            value={newTaskTitle} 
            onChange={e => setNewTaskTitle(e.target.value)} 
            onKeyDown={handleKeyPressed}
            />
          <Button onClick={handleAddTask} disabled={!newTaskTitle}>Add task</Button>
        </Wrapper>
        <List>
          {toDoList.length > 0 && (
            toDoList.map(item => {
              const Icon = item.completed ? CheckCircleFilled : CheckCircleOutlined;
              return (
                <TaskItem key={item.id}>
                  <Icon onClick={() => handleCompletedTask(item.id)} />
                  <Text>{item.title}</Text>
                  <DeleteFilled onClick={console.log} />
                </TaskItem>
              );
            })
          )}
        </List>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
