import React from "react";

const todoApi = () => {
  return <div>todoApi</div>;
};

export default todoApi;

const BASE_URL = "http://localhost:5000";

export const fetchTodos = async () => {
  const response = await fetch(`${BASE_URL}/api/todos`);
  if (!response.ok) {
    throw new Error("Could not load todos. Please try again.");
  }

  return await response.json();
};
