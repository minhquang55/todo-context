import React from "react";
import TodoItem from "./TodoItem";

export default function TableTodo({ todoList, deleteTodo, editTodo }) {
  return (
    <table className="table table-hover table-bordered mt-3">
      <thead>
        <tr>
          <th>STT</th>
          <th>Title</th>
          <th>Content</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {[...todoList].reverse().map((todo, index) => (
          <TodoItem
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </tbody>
    </table>
  );
}
