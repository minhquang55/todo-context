import React from "react";

export default function TodoItem({ todo, index, deleteTodo, editTodo }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{todo.title}</td>
      <td>{todo.content}</td>
      <td>{todo.status}</td>
      <td>
        <button
          className="btn btn-danger me-2"
          onClick={() => deleteTodo(todo.id)}
        >
          Xoa
        </button>
        <button className="btn btn-primary" onClick={() => editTodo(todo.id)}>
          Sua
        </button>
      </td>
    </tr>
  );
}
