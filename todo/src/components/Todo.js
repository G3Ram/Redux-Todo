import React from "react";

function Todo(props) {
  return (
    <div>
      {props.todoItems.map(item => (
        <p key={item.id}>
          {item.id}.{item.todoItem} Due-Date: {item.due_date} Completed:
          {item.completed}
        </p>
      ))}
    </div>
  );
}

export default Todo;
