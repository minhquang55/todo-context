import React from "react";

export default function TableTodo({ todoList, deleteTodo, editTodo, isEdit }) {
  return (
    <table>
      <tr>
        <th>STT</th>
        <th>Title</th>
        <th>Content</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      <tbody >
        {todoList.map((todo, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{todo.title}</td>
              <td>{todo.content}</td>
              <td>{todo.status}</td>
              <td>
                <button onClick={() => deleteTodo(todo.id)}>Xoa</button>
                <button onClick={() => editTodo(todo.id)}>Sua</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
