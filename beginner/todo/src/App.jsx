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
    <div
      className="App"
      // style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Todo Application</h1>
      <AddTodo todo={todo} setTodo={setTodo} setTodos={setTodos} />

      {todos.map((item) => (
        <div key={item.id} className="todo-item">
          <input
            type="checkbox"
            checked={item.complete}
            onChange={() => handleIsChecked(item.id)}
          />
          <div
            className="todo-task"
            // style={{
            //   textDecoration: item.complete ? "line-through" : "none",
            // }}
          >
            {item.task}
          </div>
          <div
            className="close-button"
            // style={{
            //   fontSize: "20px",
            //   cursor: "pointer",
            //   marginLeft: "10px",
            // }}
            onClick={() => handleDelete(item.id)}
          >
            &times;
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
