export interface Todo {
  id: string;
  title: string;
  content: string;
  isCompleted?: boolean;
}

export type TodoWithouId = Omit<Todo, "id">;
