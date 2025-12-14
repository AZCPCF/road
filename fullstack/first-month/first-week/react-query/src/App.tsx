import { useEffect } from "react";
import AddTodoForm from "./components/add-todo-form";
import { useTodos } from "./store/todos";
function App() {
  const todos = useTodos((s) => s.todos);
  const isLoading = useTodos((s) => s.isLoading);
  const getAllTodos = useTodos((s) => s.getAllTodos);
  const updateTodo = useTodos((s) => s.updateTodo);
  const deleteTodo = useTodos((s) => s.deleteTodo);

  useEffect(() => {
    getAllTodos();
  }, []);

  if (isLoading) return "Loading...";

  return (
    <div className="grid grid-cols-4 w-full gap-2 *:h-max">
      <AddTodoForm />
      <div className="grid grid-cols-4 col-span-3 gap-2">
        {todos.map((item) => (
          <div
            key={item.id}
            className={`text-white flex flex-col rounded-md p-2 min-h-28 relative ${
              item.isCompleted ? "bg-neutral-500" : "bg-neutral-700"
            }`}
          >
            <p>
              #{item.id} {item.title}
            </p>
            <p>{item.content}</p>
            <p
              className={
                item.isCompleted ? "text-emerald-500" : "text-rose-500"
              }
            >
              {item.isCompleted ? "done" : "active"}
            </p>

            <div className="absolute right-2 flex flex-col gap-2">
              <button
                onClick={() =>
                  updateTodo({ ...item, isCompleted: !item.isCompleted })
                }
              >
                change
              </button>
              <button onClick={() => deleteTodo(item.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
