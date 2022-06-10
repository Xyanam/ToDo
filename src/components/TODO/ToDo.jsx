import "./ToDo.css";

const ToDo = (props) => {
  function completeTodo(id) {
    let newTodo = [...props.todos].filter((i) => {
      if (i.id === id) {
        i.completed = !i.completed;
      }
      return i;
    });
    props.setTodo(newTodo);
  }
  const done = [];
  if (props.todo.completed) {
    done.push("complete");
  }
  return (
    <div className="todik">
      <h2 className={done.join(" ")}>{props.todo.title}</h2>
      <div className="icons">
        {!props.todo.completed ? (
          <ion-icon
            name="checkmark-outline"
            onClick={() => completeTodo(props.todo.id)}
          ></ion-icon>
        ) : (
          <ion-icon
            name="close-outline"
            onClick={() => completeTodo(props.todo.id)}
          ></ion-icon>
        )}
        <ion-icon
          name="remove-circle-outline"
          onClick={() => {
            props.remove(props.todo);
          }}
        ></ion-icon>
      </div>
    </div>
  );
};
export default ToDo;
