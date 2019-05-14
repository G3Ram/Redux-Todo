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
          completed: false,
          deleted: false
        }),
        inputValue: ""
      });
    case "MARK_COMPLETE":
      return {
        ...state,
        todoList: state.todoList.map(todoItem => {
          if (todoItem.id === action.id) {
            return {
              ...todoItem,
              completed: !todoItem.completed
            };
          }
          return todoItem;
        })
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter(todoItem => {
          return todoItem.id !== action.id;
        })
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
