import Parent from "./components/Parent";
import Header from "./components/Header";
const App = () => {
  return (
    <>
    <Parent background='red'>
      <Header title="PTag" />
    </Parent>

    <Parent >
      <Header title="aPTag" />
    </Parent>
    </>
  );
};

export default App;
