import { useTodos, useTodoStats, type Filter } from "../../store/todos";

const buttons: Filter[] = ["all", "active", "completed"];

export default function TodosFilter() {
  const todosCount = useTodoStats();
  const filter = useTodos((state) => state.filter);
  const setFilter = useTodos((state) => state.setFilter);
  return (
    <section className="flex items-center gap-2 flex-wrap">
      <h2 className="w-full text-xl">Filters</h2>
      <div className="gap-1 flex">
        {buttons.map((item) => (
          <button
            key={item+"-filter"}
            className="data-[active=true]:bg-emerald-300 dark:bg-neutral-500 data-[active=true]:text-white bg-neutral-100"
            data-active={item == filter}
            onClick={() => {
              setFilter(item);
            }}
          >
            {item} {`(${todosCount[item]})`}
          </button>
        ))}
      </div>
    </section>
  );
}
