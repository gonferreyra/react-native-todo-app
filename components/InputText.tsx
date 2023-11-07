import { TextInput } from 'react-native-paper';
import { Todo } from '../interfaces/interface';

type InputProps = {
  todo: Todo;
  taskInputHandler: (enteredText: string) => void;
};

const InputText = (props: InputProps) => {
  return (
    <TextInput
      mode='outlined'
      placeholder='Type new ToDo'
      focusable
      label='Todo'
      value={props.todo.task}
      onChangeText={props.taskInputHandler}
      style={{ width: '100%' }}
    />
  );
};

export default InputText;
