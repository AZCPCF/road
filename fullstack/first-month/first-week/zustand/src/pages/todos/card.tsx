import { useTodos, type Todo } from "../../store/todos";

export default function TodoCard({ todo }: { todo: Todo }) {
  const removeTodo = useTodos((state) => state.removeTodo);
  const toggleTodo = useTodos((state) => state.toggleTodo);

  return (
    <div
      className="bg-neutral-200/70 dark:!bg-neutral-700 flex gap-2 flex-wrap *:w-full p-2 rounded-lg"
      key={todo.id}
    >
      <h3 className=" text-xl">{todo.title}</h3>
      <p className={todo.completed ? "text-emerald-400" : "text-rose-400"}>
        {todo.completed ? "completed" : "active"}
      </p>
      <div className="grid grid-cols-2 gap-2">
        <button
          className="bg-blue-400 dark:bg-blue-600 hover:bg-blue-500 !p-2 text-white"
          onClick={async () => {
            await toggleTodo(todo.id);
          }}
        >
          change status
        </button>
        <button
          onClick={async () => {
            await removeTodo(todo.id);
          }}
          className="bg-rose-400 hover:bg-rose-500 dark:bg-rose-600 text-white !p-2"
        >
          remove todo
        </button>
      </div>
    </div>
  );
}
