import { create } from "zustand";
import { persist } from "zustand/middleware";
import { todoApi } from "../api/todos-api";
import type { Todo, TodoWithouId } from "../types/todo";
import { immer } from "zustand/middleware/immer";

type TodoState = {
  todos: Todo[];
  isLoading: boolean;

  getAllTodos: () => Promise<void>;
  addTodo: (todo: TodoWithouId) => Promise<void>;
  updateTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
};

export const useTodos = create<TodoState>()(
  persist(
    immer((set) => ({
      todos: [],
      isLoading: false,

      getAllTodos: async () => {
        set((state) => {
          state.isLoading = true;
        });

        const data = await todoApi.getAllTodos();

        set((state) => {
          state.todos = data;
          state.isLoading = false;
        });
      },

      addTodo: async (todo) => {
        const temp: Todo = {
          ...todo,
          id: "#0",
        };

        set((state) => {
          state.todos.push(temp);
        });

        try {
          const saved = await todoApi.addTodo(todo);

          set((state) => {
            const index = state.todos.findIndex((t) => t.id === temp.id);
            if (index !== -1) state.todos[index] = saved;
          });
        } catch {
          set((state) => {
            state.todos = state.todos.filter((t) => t.id !== temp.id);
          });
        }
      },

      updateTodo: async (todo) => {
        const prev = structuredClone(useTodos.getState().todos);

        set((state) => {
          const index = state.todos.findIndex((t) => t.id === todo.id);
          if (index !== -1) {
            state.todos[index] = { ...state.todos[index], ...todo };
          }
        });

        try {
          await todoApi.updateTodoById(todo);
        } catch {
          set((state) => {
            state.todos = prev;
          });
        }
      },

      deleteTodo: async (id) => {
        const prev = structuredClone(useTodos.getState().todos);

        set((state) => {
          state.todos = state.todos.filter((t) => t.id !== id);
        });

        try {
          await todoApi.deleteTodoById(id);
        } catch (err) {
          set((state) => {
            state.todos = prev;
          });
        }
      },
    })),
    { name: "todos-storage" }
  )
);
