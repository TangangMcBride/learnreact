import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordion from "./Components/Accordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen">
      <Accordion />
    </div>
  );
}

export default App;
