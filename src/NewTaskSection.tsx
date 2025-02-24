import { FC, KeyboardEvent } from "react";
import { Button, Heading, Input } from "@chakra-ui/react"
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

interface NewTaskSectionProps {
  newTaskTitle: string;
  handleAddTask: () => void;
  setNewTaskTitle: (value: string) => void;
};

const NewTaskSection: FC<NewTaskSectionProps> = ({
  newTaskTitle,
  handleAddTask,
  setNewTaskTitle
}) => {

  const handleKeyPressed = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskTitle !== '') {
      handleAddTask();
    }
  }

  return (
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
  );
};

export default NewTaskSection;