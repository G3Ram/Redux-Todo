import React from "react";
import { connect } from "react-redux";

function Todo(props) {
  return (
    <div>
      {props.todoItems.map(item => (
        <div className="display-todo" key={item.id}>
          <div id="item1">
            <input type="checkbox" value={props.}/>
          </div>
          <div id="item2">{item.todoItem}</div>
          <div id="item3">
            <img className="todo-trash" src="./trash.png" />
          </div>
        </div>
      ))}
    </div>
  );
}


export default Todo;
