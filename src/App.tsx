import { Button } from "antd";
import { useState } from "react";
import "./App.css";

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
