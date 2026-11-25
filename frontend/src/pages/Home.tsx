import TodoItem from "../components/TodoItem";
import type { Todo, NewTodo } from "../App";

interface TodosProps {
  todos: Todo[];
  addTodos: (data: NewTodo) => void;
  deleteTodo: (todoId: number) => void;
  completeTodo: (todoId: number) => void;
}

function Home({ todos, deleteTodo, completeTodo }: TodosProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.todoId}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </ul>
  );
}

export default Home;
