import { Button } from "antd";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter((state) => ++state);
  };
  return (
    <>
      <Button style={{ color: "#fff" }} type="text" disabled>
        counter: {counter}
      </Button>
      <Button onClick={clickHandler}>Click</Button>
    </>
  );
}

export default App;
