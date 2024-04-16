import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";

function App() {
  const [isStared, setIsStarted] = useState(false);
  return (
    <>
      {isStared ? (
        <div>game started</div>
      ) : (
        <StartGame start={() => setIsStarted(true)} />
      )}
    </>
  );
}

export default App;
