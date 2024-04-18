import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import PlayGame from "./components/PlayGame";

function App() {
  const [isStared, setIsStarted] = useState(false);
  return (
    <>
      {/* {isStared ? <PlayGame /> : <StartGame start={() => setIsStarted(true)} />} */}
      <PlayGame />
    </>
  );
}

export default App;
