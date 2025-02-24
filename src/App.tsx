import './App.css';
import { ChakraProvider, defaultSystem, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import { useState } from 'react';
import NewTaskSection from './NewTaskSection';
import { Item } from './types';
import TaskManagerCard from './TaskManagerCard';


function App() {
  const [toDoList, setToDoList] = useState<Item[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

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


  return (
    <ChakraProvider value={defaultSystem}>
      <Header />
      <Flex>
        <NewTaskSection
          newTaskTitle={newTaskTitle}
          handleAddTask={handleAddTask}
          setNewTaskTitle={setNewTaskTitle}
        />
        <TaskManagerCard
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
