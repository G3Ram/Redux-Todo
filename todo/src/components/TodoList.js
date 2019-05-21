import React from "react";
import "../index.css";
//import Todo from "./Todo";
import { connect } from "react-redux";

function TodoList(props) {
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
                <img
                  className="todo-trash"
                  src="./trash.png"
                  onClick={() => props.trashTodo(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="input-fields">
          <input
            className="todo-input"
            type="text"
            placeholder="What's pending? Enter it here to remember!"
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
  return {
    inputValue: state.inputValue,
    todoList: state.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputChanged: evt => {
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
    },
    trashTodo: id => {
      const action = { type: "DELETE_TODO", id: id };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
