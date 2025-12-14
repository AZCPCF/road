import { useShallow } from "zustand/shallow";
import { pages, useApp, type Pages } from "../store/app";

export default function Header() {
  const { page, setPage } = useApp(
    useShallow((s) => ({
      setPage: s.setPage,
      page: s.page,
    }))
  );
  const toggleTheme = useApp((s) => s.toggleTheme);
  return (
    <header className="gap-1 flex w-full bg-neutral-300 dark:bg-neutral-800 relative">
      {(Object.keys(pages) as Pages[]).map((item) => (
        <button
          key={item + "-page"}
          className="data-[active=true]:bg-violet-500 dark:bg-neutral-500 data-[active=true]:text-white !text-xl bg-neutral-100"
          data-active={item === page}
          onClick={() => setPage(item)}
        >
          {item}
        </button>
      ))}
      <button
        onClick={toggleTheme}
        className="dark:bg-white dark:text-black absolute bg-black text-white right-4 top-1/2 -translate-y-1/2"
      >
        toggle theme
      </button>
    </header>
  );
}
