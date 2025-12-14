import { useRef } from "react";
import { useTodos } from "../../store/todos";

export default function AddTodoForm() {
  const addTodo = useTodos((state) => state.addTodo);
  const todoInputRef = useRef("");
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await addTodo(todoInputRef.current);
      }}
      className="flex gap-2 my-3 flex-wrap"
    >
      <h2 className="w-full text-xl">Add Todo</h2>
      <input
        type="text"
        className="bg-neutral-200 dark:bg-neutral-500 outline-neutral-700 dark:outline-neutral-200 focus:outline-2 p-2 rounded-lg"
        onChange={(e) => {
          todoInputRef.current = e.target.value;
        }}
        placeholder="todo"
      />
      <button
        className="bg-neutral-200 hover:text-white dark:bg-neutral-500 hover:bg-emerald-300 p-2 rounded-lg"
        type="submit"
      >
        submit
      </button>
    </form>
  );
}
