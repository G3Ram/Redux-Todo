import React from "react";
import "../index.css";
//import Todo from "./Todo";
import { connect } from "react-redux";

function TodoList(props) {
  console.log("props in todoList is " + props.todoList);
  return (
    <div className="todo-list-container">
      <div id="todo-heading"> My Todo List</div>
      <div className="todo-table">
        <div>
          {props.todoList.map(item => (
            <div className="display-todo" key={item.id}>
              <div id="item1">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => props.markCompleted(item.id)}
                />
              </div>
              <div id={item.completed ? "item2-completed" : "item2"}>
                {item.todoItem}
              </div>
              <div id="item3">
                <img className="todo-trash" src="./trash.png" />
              </div>
            </div>
          ))}
        </div>
        <div className="input-fields">
          <input
            className="todo-input"
            type="text"
            placeholder="Enter a todo here"
            value={props.inputValue}
            onChange={props.inputChanged}
          />
          <div className="todo-add-btn" onClick={props.addTodo}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  for (let i = 0; i < state.todoList.length; i++) {
    console.log("**********" + state.todoList[i].completed);
  }
  return {
    inputValue: state.inputValue,
    todoList: state.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputChanged: evt => {
      console.log("changed", evt.target.value);
      const action = { type: "INPUT_CHANGE", text: evt.target.value };
      dispatch(action);
    },
    addTodo: () => {
      const action = { type: "ADD_TODO" };
      dispatch(action);
    },
    markCompleted: id => {
      const action = { type: "MARK_COMPLETE", id: id };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
