import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export interface Task 
{
  id: string;
  text: string;
  done: boolean;
}

const STORAGE_KEY = 'TODO_LIST_ITEMS';

export default function App()
{
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load saved tasks on startup
  useEffect(() => 
  {
    (async () => 
    {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) setTasks(JSON.parse(stored));
    })();
  }, []);

  // Save whenever tasks change
  useEffect(() => 
  {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => 
  {
    if (!text.trim()) return;
    const newTask: Task = { id: Date.now().toString(), text, done: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => 
  {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header:
  {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
