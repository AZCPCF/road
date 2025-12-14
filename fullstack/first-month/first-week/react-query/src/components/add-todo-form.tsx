import { useForm } from "@tanstack/react-form";
import { addTodoSchema } from "../schema/add-todo-schema";
import { useTodos } from "../store/todos";
import type { TodoWithouId } from "../types/todo";


export default function AddTodoForm() {
  const addTodo = useTodos((state) => state.addTodo);
  const myForm = useForm({
    defaultValues: {
      content: "",
      title: "",
      isCompleted: false,
    } as TodoWithouId,
    validators: {
      onChange: addTodoSchema,
    },
    onSubmit: ({ value }) => {
      addTodo(value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        myForm.handleSubmit();
      }}
      className="bg-neutral-600 p-4 col-span-1 rounded-md h-max sticky top-2"
    >
      <myForm.Field name="title">
        {(field) => (
          <div className="flex flex-col p-3 text-lg gap-2">
            <label htmlFor="title">title</label>
            <input
              className="bg-neutral-400 p-1.5 rounded-sm pl-2"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            <p>{field.state.meta.errors[0]?.message}</p>
          </div>
        )}
      </myForm.Field>

      <myForm.Field name="content">
        {(field) => (
          <div className="flex flex-col p-3 text-lg gap-2">
            <label htmlFor="content">content</label>
            <input
              className="bg-neutral-400 p-1.5 rounded-sm pl-2"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            <p>{field.state.meta.errors[0]?.message}</p>
          </div>
        )}
      </myForm.Field>

      <myForm.Field name="isCompleted">
        {(field) => (
          <div className="flex items-center p-3 text-lg gap-2">
            <label>completed</label>
            <input
              type="checkbox"
              checked={field.state.value}
              onChange={(e) => field.handleChange(e.target.checked)}
            />
          </div>
        )}
      </myForm.Field>

      <button type="submit" className="w-full">
        submit
      </button>
    </form>
  );
}
