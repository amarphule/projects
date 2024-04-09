import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    const remainingTOdos = todos.filter((item) => item.id !== id);
    setTodos(remainingTOdos);
  };
  return (
    <>
      <h1>Todo Application</h1>
      <AddTodo todo={todo} setTodo={setTodo} setTodos={setTodos} />
      <ol>
        {todos.map((item, i) => (
          <li key={i}>
            {item.task}
            <span
              style={{
                fontSize: "20px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
              onClick={() => handleDelete(item.id)}
            >
              x
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
