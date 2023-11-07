import { Text } from 'react-native-paper';
import { Todo } from '../interfaces/interface';
import { StyleSheet } from 'react-native';

type TodoItemProps = {
  deleteTodo: (id: number) => void;
  todo: Todo;
};

const TodoItem = (props: TodoItemProps) => {
  return (
    <Text
      style={style.text}
      variant='bodyLarge'
      onPress={() => props.deleteTodo(props.todo.id)}
    >
      {props.todo.task}
    </Text>
  );
};

const style = StyleSheet.create({
  text: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
});

export default TodoItem;
