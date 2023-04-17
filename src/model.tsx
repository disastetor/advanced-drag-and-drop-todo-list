// import { useReducer } from 'react';

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
/* 
type Actions =
  | { type: 'add'; payload: string }
  | { type: 'delete'; payload: number }
  | { type: 'done'; payload: number };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case 'delete':
      return [state.filter((newState) => newState.id !== action.payload)];
    case 'done':
      return state.map((todo) =>
        todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};

const TodoListReducer = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);
  return (
    <div></div>
  );
};
export default TodoListReducer; */
