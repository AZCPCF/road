import Header from "./components/header";
import { pages, useApp } from "./store/app";

const App = () => {
  const page = useApp((state) => state.page);
  const Component = pages[page];
  return (
    <div className="*:p-4">
      <Header />
      <Component />
    </div>
  );
};

export default App;
