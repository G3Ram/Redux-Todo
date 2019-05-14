import React from "react";
import "./index.css";
import Todo from "./components/Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("This is App constructor");
  }

  render() {
    return (
      <div>
        <h1> This is my todo list app</h1>
        <Todo />
      </div>
    );
  }
}
export default App;
