import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../App';

interface Props
{
  task: Task;
  onToggle: (id: string) => void;
}

export default function TaskItem({ task, onToggle }: Props)
{
  return (
    <TouchableOpacity onPress={() => onToggle(task.id)}>
      <Text style={[styles.text, task.done && styles.done]}>
        {task.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text:
  {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  done:
  {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
