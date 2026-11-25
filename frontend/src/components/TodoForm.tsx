import { useState } from "react";
import type { Todo } from "../App";

interface TodoFormProps {
  addTodo: (data: Pick<Todo, "title" | "description">) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAdd = () => {
    if (!title.trim()) return;

    addTodo({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoForm;
