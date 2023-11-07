import { Todo } from '../interfaces/interface';

type ReducerActions =
  | { type: 'addTodo'; payload: { todo: Todo } }
  | { type: 'deleteTodo'; payload: { id: number } }
  | { type: 'toggleComplete'; payload: { id: number } };

export const todoReducer = (state: Todo[], action: ReducerActions) => {
  switch (action.type) {
    case 'addTodo':
      return [...state, action.payload.todo];
    case 'deleteTodo':
      return state.filter((todo) => todo.id !== action.payload.id);
    case 'toggleComplete':
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
