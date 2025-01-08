import { useState } from "react";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import "./App.css";
const App = () => {
  const [select, setSelect] = useState(true);
  return (
    <>
      <div id="buttons">
        <button onClick={() => setSelect(true)} disabled={select}>
          ex_1
        </button>
        <button onClick={() => setSelect(false)} disabled={!select}>
          ex_2
        </button>
      </div>

      <div style={{ margin: "50px" }}>{select ? <Form /> : <Form2 />}</div>
    </>
  );
};

export default App;
