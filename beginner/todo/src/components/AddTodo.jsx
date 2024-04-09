// eslint-disable-next-line react/prop-types
const AddTodo = ({ todo, setTodo, setTodos }) => {
  const handleAddTodo = () => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { task: todo, id: new Date().getTime() },
    ]);
    setTodo("");
  };
  return (
    <div>
      <input
        placeholder="Enter Task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>ADD TODO</button>
    </div>
  );
};

export default AddTodo;
