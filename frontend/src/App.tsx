import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import TodoForm from "./components/TodoForm";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { fetchTodos } from "./services/todoApi";

export interface Todo {
  todoId: number;
  title: string;
  description: string;
  completed: boolean;
}

// Data from the Add Todo form
export interface NewTodo {
  title: string;
  description: string;
}

// Fields that can be updated
export interface TodoUpdates {
  title?: string;
  description?: string;
  completed?: boolean;
}

// Information needed to edit a Todo
export interface EditTodoInput {
  todoId: number;
  updatedData: TodoUpdates;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getAllTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.log("Error fetching todos:", error);
        setError("Could not load todos.");
      }

      setLoading(false);
    };

    getAllTodos();
  }, []);

  function addTodo({ title, description }: NewTodo) {
    const newTodo: Todo = {
      todoId: Date.now(),
      title,
      description,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }

  function deleteTodo(todoId: number) {
    const newTodos = todos.filter((todo) => todo.todoId !== todoId);

    setTodos(newTodos);
  }

  function editTodo({ todoId, updatedData }: EditTodoInput) {
    const updatedTodos = todos.map((todo) => {
      if (todo.todoId === todoId) {
        return {
          ...todo,
          ...updatedData,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function completeTodo(todoId: number) {
    const newTodos = todos.map((todo) => {
      if (todo.todoId === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  if (loading) {
    return <p>Loading todos...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            todos={todos}
            addTodos={addTodo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        }
      />

      <Route path="*" element={<ErrorPage />} />

      <Route path="/todos/new" element={<TodoForm addTodo={addTodo} />} />
    </Routes>
  );
}

export default App;
