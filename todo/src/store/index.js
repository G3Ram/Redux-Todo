import { createStore } from "redux";

const initialState = {
  inputValue: "",
  todoList: []
};

const reducer = (state = initialState, action) => {
  console.log("Reducer running", action);

  switch (action.type) {
    case "INPUT_CHANGE":
      return Object.assign({}, state, { inputValue: action.text });
    case "ADD_TODO":
      return Object.assign({}, state, {
        todoList: state.todoList.concat({
          id: state.todoList.length + 1,
          todoItem: state.inputValue,
          completed: "false",
          due_date: Date.now()
        }),
        inputValue: ""
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
