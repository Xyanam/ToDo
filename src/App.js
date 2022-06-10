import "./App.css";

import TodoList from "./components/TODO/TodoList";

function App() {
  return (
    <div className="App">
      <div className="todo">
        <h1>TODOS</h1>

        <TodoList />
      </div>
    </div>
  );
}

export default App;
