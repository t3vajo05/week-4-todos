import React from 'react';
import { FlatList } from 'react-native';
import { Task } from '../App';
import TaskItem from './TaskItem';

interface Props
{
  tasks: Task[];
  onToggle: (id: string) => void;
}

export default function TaskList({ tasks, onToggle }: Props)
{
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem task={item} onToggle={onToggle} />
      )}
    />
  );
}
