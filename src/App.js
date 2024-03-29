// import "./App.css";
// import Todo from "./Todo";
// import React, { Component } from "react";
// import { Paper, List, Container } from "@material-ui/core";
// import AddTodo from "./AddTodo";
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [
//         { id: 0, title: "Hello World 1", done: true },
//         { id: 1, title: "Hello World 2", done: false },
//       ],
//     };
//   }
//
//   add = (item) => {
//     const thisItems = this.state.items;
//     item.id = "ID-" + thisItems.length;
//     item.done = false;
//     thisItems.push(item);
//     this.setState({ items: thisItems });
//     console.log("items: ", this.state.items);
//   };
//
//   render() {
//     const todoItems = this.state.items.length > 0 && (
//       <Paper style={{ margin: 16 }}>
//         <List>
//           {this.state.items.map((item, idx) => (
//             <Todo item={item} key={item.id} />
//           ))}
//         </List>
//       </Paper>
//     );
//
//     return (
//       <div className="App">
//         <Container maxWidth="md">
//           <AddTodo add={this.add} />
//           <div className="TodoList">{todoItems}</div>
//         </Container>
//       </div>
//     );
//   }
// }
//
// export default App;

import React from 'react';
import "./App.css";
import TodoPage from "./page/TodoPage";

function App(props) {
  return (
      <div className="App">
        <TodoPage />
      </div>
  );
}

export default App;
