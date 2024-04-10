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
    <div className="input-container">
      <input
        className="input-field"
        placeholder="Enter Task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="add-button" onClick={handleAddTodo}>
        ADD TODO
      </button>
    </div>
  );
};

export default AddTodo;
