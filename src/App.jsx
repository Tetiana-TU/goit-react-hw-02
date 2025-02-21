import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";

function App() {
  const [clicks, setClicks] = useState(0);
  return (
    <div>
      <Description />
      <Options />
    </div>
  );
}

export default App;
