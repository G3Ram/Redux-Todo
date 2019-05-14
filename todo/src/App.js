import React from "react";
import "./index.css";
import TodoList from "./components/TodoList";
import store from "./store";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("This is App constructor");
  }

  render() {
    return (
      <div>
        <TodoList store={store} />
      </div>
    );
  }
}
export default App;
