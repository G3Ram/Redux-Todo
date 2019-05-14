import React from "react";
import "../index.css";
import Todo from "./Todo";
import { connect } from "react-redux";

function TodoList(props) {
  return (
    <div className="todo-list-container">
      <h1> This is my TodoList App</h1>
      <Todo todoItems={props.todoList} />
      <input
        className="todo-input"
        type="text"
        placeholder="Enter a todo here"
        value={props.inputValue}
        onChange={props.inputChanged}
      />
      <button className="todo-add-btn" onClick={props.addTodo}>
        Add
      </button>
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
      console.log("changed", evt.target.value);
      const action = { type: "INPUT_CHANGE", text: evt.target.value };
      dispatch(action);
    },
    addTodo: () => {
      const action = { type: "ADD_TODO" };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
