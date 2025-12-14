import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};
export type Filter = "all" | "completed" | "active";
type TodosState = {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
};
export const useTodos = create<TodosState>()(
  persist(
    (set) => ({
      todos: [],
      filter: "all",
      addTodo: (title) => {
        set((state) => ({
          todos: [
            ...state.todos,
            { id: crypto.randomUUID(), title, completed: false },
          ],
        }));
      },
      removeTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((item) => item.id != id),
        }));
      },
      setFilter: (filter) => {
        set(() => ({ filter }));
      },
      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((item) =>
            item.id == id ? { ...item, completed: !item.completed } : item
          ),
        }));
      },
    }),
    { name: "todos-storage" }
  )
);

export const useTodoStats = () => {
  const todos = useTodos((state) => state.todos);
  const completed = todos.filter((item) => item.completed);
  return {
    all: todos.length,
    completed: completed.length,
    active: todos.length - completed.length,
  };
};
export const useFilteredTodos = () => {
  const todos = useTodos((state) => state.todos);
  const filter = useTodos((state) => state.filter);
  if (filter == "all") {
    return todos;
  }
  if (filter == "completed") {
    return todos.filter((item) => item.completed);
  }
  return todos.filter((item) => !item.completed);
};
