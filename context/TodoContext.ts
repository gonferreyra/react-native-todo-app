import { createContext } from 'react';
import { Todo } from '../interfaces/interface';

type ContextProps = {
  todoState: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
};

export const TodoContext = createContext<ContextProps>({} as ContextProps);
