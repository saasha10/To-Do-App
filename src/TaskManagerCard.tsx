import { ChangeEvent, FC } from "react";
import { Flex, Wrap, Button, Text, Card } from '@chakra-ui/react';
import { Radio, RadioGroup } from './components/ui/radio';
import { DeleteFilled, CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Item } from "./types";

const List = styled(Wrap)`
  padding-top: 1rem;
`;

const CardWrapper = styled(Card.Root)`
  width: 70vw;
  height: 80vh;
  margin: 1rem;
  padding: 20px;
`

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

const DeleteIcon = styled(DeleteFilled)`
  color: #e21212;
`;

interface TaskManagerCardProps {
  toDoList: Item[];
  setToDoList: (list: Item[]) => void;
};

const TaskManagerCard: FC<TaskManagerCardProps> = ({ toDoList, setToDoList }) => {

  const handleCompletedTask = (id: string) => {
    const toDoListUpdated: Item[] = toDoList.map(item => {
      if (item.id === id) {
        return ({
          ...item,
          completed: !item.completed
        })
      }
      return item;
    });
    setToDoList(toDoListUpdated);
  };

  const removeTask = (id: string) => {
    const toDoListFiltered: Item[] = toDoList.filter(item => item.id !== id);
    setToDoList(toDoListFiltered);
  };

  const handleFilterToDoList = (event: ChangeEvent<HTMLInputElement>)  => {
    console.log('🚀 ~ event:', event);
  };


  return (
    <CardWrapper variant="elevated">
      <Flex justifyContent="space-between" alignItems="center">
        <RadioGroup
          colorPalette='teal'
          defaultValue="all"
          spaceX="8"
        >
          <Radio value="all" onChange={handleFilterToDoList}>All</Radio>
          <Radio value="completed" onChange={handleFilterToDoList}>Completed</Radio>
          <Radio value="incompleted" onChange={handleFilterToDoList}>Incompleted</Radio>
        </RadioGroup>
        <Button>Save</Button>
      </Flex>
      <List>
        {toDoList.length > 0 && (
          toDoList.map(item => {
            const Icon = item.completed ? CheckCircleFilled : CheckCircleOutlined;
            return (
              <TaskItem key={item.id}>
                <Icon onClick={() => handleCompletedTask(item.id)} />
                <Text>{item.title}</Text>
                <DeleteIcon onClick={() => removeTask(item.id)} />
              </TaskItem>
            );
          })
        )}
      </List>
    </CardWrapper>
  );
};

export default TaskManagerCard;