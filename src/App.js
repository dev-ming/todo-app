import "./App.css";
import Todo from "./Todo";
import React, { Component } from "react";
import { Paper, List } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 0, title: "Hello World 1", done: true },
        { id: 1, title: "Hello World 2", done: false },
      ],
    };
  }

  render() {
    const todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    );

    return <div className="App">{todoItems}</div>;
  }
}

export default App;
