import { useEffect } from "react";
import { useState } from "react";
import ToDo from "./ToDo";

let TodoList = (props) => {
  const [text, setTitle] = useState("");
  const [todos, setTodo] = useState([]);
  const [filtered, setFiltered] = useState(todos);

  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: text,
      completed: false,
    };

    setTodo([...todos, newTodo]);
    setTitle("");
  };
  let removeTodo = (todo) => {
    setTodo(todos.filter((t) => t.id !== todo.id));
  };

  let filterTodo = (status) => {
    if (status === "all") {
      setFiltered(todos);
    } else {
      let newArrTodo = [...todos].filter((item) => item.completed === status);
      setFiltered(newArrTodo);
    }
  };

  return (
    <div>
      <form className="form">
        <input value={text} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={addTodo}>Добавить</button>
      </form>
      <div className="buttons">
        <button
          className="btn"
          onClick={() => {
            filterTodo("all");
          }}
        >
          All
        </button>
        <button className="btn" onClick={() => filterTodo(false)}>
          Active
        </button>
        <button className="btn" onClick={() => filterTodo(true)}>
          Completed
        </button>
      </div>
      <div>
        {filtered.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              todos={todos}
              remove={removeTodo}
              setTodo={setTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
