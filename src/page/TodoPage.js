import React from 'react';
import Todo from "../components/Todo";

const items = [
    { id: 0, title: "Hello World 1", done: true },
    { id: 1, title: "Hello World 2", done: false },
];

function TodoPage(props) {
    return (
        <div>
            {items.map(item => (
                <Todo item={item} key={item.id} />
            ))}
        </div>
    );
}

export default TodoPage;