import { type } from 'os';
import { Todo } from '../model';
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

//Style
import './styles.css';
import { useEffect, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  /* Done function */
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  /* Delete function */
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /* Edit function */
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    //console.log(inputRef.current);
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`todos-single ${snapshot.isDragging ? 'drag' : ''}`}
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* If todo.isDone is true the text is striked */}

          {edit ? (
            <input
              className="todos-single-text"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
            />
          ) : todo.isDone ? (
            <s className="todos-single-text">{todo.todo}</s>
          ) : (
            <span className="todos-single-text">{todo.todo}</span>
          )}

          <div className="icons">
            {/* Edit */}
            <span className="icon">
              {' '}
              <AiOutlineEdit
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  }
                }}
              />{' '}
            </span>

            {/* Delete */}
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <MdDeleteForever />
            </span>

            {/* Completed */}
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <AiOutlineCheck />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};
export default SingleTodo;
