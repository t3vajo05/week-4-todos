import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface Props
{
  onAdd: (text: string) => void;
}

export default function TaskInput({ onAdd }: Props)
{
  const [text, setText] = useState('');

  const handleAdd = () =>
  {
    onAdd(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input:
  {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
  },
});
