import { useFilteredTodos } from "../../store/todos";
import TodoCard from "./card";
import TodosFilter from "./filter";
import AddTodoForm from "./form";

const TodosPage = () => {
  const filteredTodos = useFilteredTodos();

  return (
    <main>
      <AddTodoForm />
      <TodosFilter />
      <section className="mt-4 grid gap-2 grid-cols-3">
        {filteredTodos.length ? (
          filteredTodos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
        ) : (
          <p>no todos in this filter</p>
        )}
      </section>
    </main>
  );
};

export default TodosPage;
