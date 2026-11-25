import { useState } from "react";
import type { NewTodo } from "../App";

interface TodoFormProps {
  // A function that receives NewTodo and returns no value
  addTodo: (data: NewTodo) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAdd = () => {
    // Do nothing if the title is empty
    if (!title.trim()) return;

    // Send title and description to App
    addTodo({
      title,
      description,
    });

    // Clear both inputs after adding
    setTitle("");
    setDescription("");
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Title"
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
