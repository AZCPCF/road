import type { Todo, TodoWithouId } from "../types/todo";

const API_URL = "https://68993fb4fed141b96b9f0e3b.mockapi.io/api/";

const fetcher = async (input: string, init?: RequestInit) => {
  const res = await fetch(`${API_URL}${input}`, {
    ...init,
    headers: { "Content-Type": "application/json" },
  });
  return res;
};

const getAllTodos = async () => {
  const res = await fetcher("todos");
  return await res.json();
};

const addTodo = async (todo: TodoWithouId) => {
  const res = await fetcher("todos", {
    method: "POST",
    body: JSON.stringify(todo),
  });
  return await res.json();
};

const deleteTodoById = async (id: string) => {
  await fetcher(`todos/${id}`, { method: "DELETE" });
  return true;
};

const updateTodoById = async (todo: Todo) => {
  await fetcher(`todos/${todo.id}`, {
    method: "PUT",
    body: JSON.stringify(todo),
  });
  return true;
};

export const todoApi = {
  getAllTodos,
  addTodo,
  deleteTodoById,
  updateTodoById,
};
