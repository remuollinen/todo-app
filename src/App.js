import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1 className="header">Todo App</h1>
      <p className="header-text">
        Add tasks, mark them completed, delete them and filter through them -
        with this Todo App!
      </p>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
