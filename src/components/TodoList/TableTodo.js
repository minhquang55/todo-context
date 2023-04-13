import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import ThemeContext from "../context/themeContext";

export default function TableTodo({ todoList, deleteTodo, editTodo }) {
  const value = useContext(ThemeContext);
  return (
    <table
      className={`table table-hover table-bordered mt-3 table-${value.theme}`}
    >
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
