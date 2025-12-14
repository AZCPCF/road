import "./App.css";
import reactLogo from "./assets/react.svg";
import { slice, useAppDispatch, useAppSelector } from "./store";
import viteLogo from "/vite.svg";

function App() {
  const count = useAppSelector((s) => s.slice.count);
  const name = useAppSelector((state) => state.slice.name);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{name}</h1>
      <div className="card">
        <button
          onClick={() => {
            dispatch(slice.actions.changeCount(+1));
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
