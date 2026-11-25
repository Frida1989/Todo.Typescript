import type { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (todoId: number) => void;
  completeTodo: (todoId: number) => void;
}

function TodoItem({ todo, deleteTodo, completeTodo }: TodoItemProps) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => completeTodo(todo.todoId)}
      />

      <div className="todo-content">
        <h2 className={todo.completed ? "completed" : "not-completed"}>
          {todo.title}
        </h2>

        {!todo.completed && <p>{todo.description}</p>}
      </div>

      <button onClick={() => deleteTodo(todo.todoId)}>X</button>
    </li>
  );
}

export default TodoItem;
