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
  const handleIsChecked = (id) => {
    const updatedTodo = todos.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodos(updatedTodo);
  };
  return (
    <>
      <h1>Todo Application</h1>
      <AddTodo todo={todo} setTodo={setTodo} setTodos={setTodos} />
      <ol>
        {todos.map((item, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => handleIsChecked(item.id)}
            />
            <span
              style={{
                textDecoration: item.complete ? "line-through" : "none",
              }}
            >
              {item.task}
            </span>
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
