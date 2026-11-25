import TodoItem from "../components/TodoItem";
import type { Todo } from "../App";

interface TodosProps {
  todos: Todo[];

  addTodos: (data: Pick<Todo, "title" | "description">) => void;
  deleteTodo: (todoId: number) => void;
  completeTodo: (todoId: number) => void;
}

function Home({ todos, deleteTodo, completeTodo }: TodosProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.todoId}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </ul>
  );
}

export default Home;
