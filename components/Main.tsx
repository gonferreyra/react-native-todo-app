import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import React, { useContext, useState } from 'react';
import InputText from './InputText';
import { Button } from 'react-native-paper';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';
import Constants from 'expo-constants';

const Main = () => {
  const [todo, setTodo] = useState({
    id: 0,
    task: '',
    completed: false,
  });
  const { task } = todo;

  const todoContext = useContext(TodoContext);
  const { todoState, addTodo, deleteTodo, toggleComplete } = todoContext;

  const taskInputHandler = (enteredText: string) => {
    setTodo({ ...todo, task: enteredText });
  };

  const onSubmit = () => {
    if (task.length <= 5) return;
    addTodo({ ...todo, id: new Date().getTime() });
    setTodo({ ...todo, task: '' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.textInputContainer}>
          <View>
            <Text style={styles.headingText}>ToDo List</Text>
            <Text style={styles.text}>
              A simple React-Native with Typescript ToDo App
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <InputText taskInputHandler={taskInputHandler} todo={todo} />
            <Button mode='contained' onPress={onSubmit}>
              Add ToDo
            </Button>
          </View>
        </View>
        <View style={styles.todoContainer}>
          <View>
            <FlatList
              data={todoState}
              renderItem={(todo) => {
                return <TodoItem deleteTodo={deleteTodo} todo={todo.item} />;
              }}
              keyExtractor={(item, index) => {
                return item.id.toString();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6666',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 30,
  },
  body: {
    paddingHorizontal: 40,
    flex: 1,
  },
  textInputContainer: {},
  headingText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 45,
    color: 'white',
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  inputContainer: {
    gap: 15,
    borderBottomColor: '#fff',
    borderBottomWidth: 3,
    paddingBottom: 10,
  },
  todoContainer: {
    flex: 1,
    marginTop: 30,
  },
});

export default Main;
