import { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';
import { Todo } from '../interfaces/interface';

const INITIAL_STATE = [
  {
    id: 1,
    task: 'Load ToDo from Context Provider',
    completed: false,
  },
];

type TodoProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const addTodo = (todo: Todo) => {
    dispatch({ type: 'addTodo', payload: { todo } });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: 'deleteTodo', payload: { id } });
  };

  const toggleComplete = (id: number) => {
    dispatch({ type: 'toggleComplete', payload: { id } });
  };

  return (
    <TodoContext.Provider
      value={{ todoState, addTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
