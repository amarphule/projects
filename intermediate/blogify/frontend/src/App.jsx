import "./App.css";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-center text-3xl">Blogging website</h1>
      </header>
      <main>
        <PostForm />
      </main>
    </div>
  );
}

export default App;
