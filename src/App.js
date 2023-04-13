import { useState } from "react";
import TableTodo from "./components/TableTodo";
import { v1 as uuidv1 } from 'uuid'

export default function Home() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "React",
      content: "React v18",
      status: "todo",
    },
  ]);

  const [isEdit, setIsEdit] = useState(false);

  const [newTodo, setNewTodo] = useState({
    id: uuidv1(),
    title: "",
    content: "",
    status: "todo",
  });

  const addTodo = () => {
    setTodoList([...todoList, newTodo]);
    setNewTodo({
      id: uuidv1(),
      title: "",
      content: "",
      status: "todo",
    });
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(newTodoList);
  }

  const editTodo = (id) => {
    setIsEdit(true);
    const editTodo = todoList.find(todo => todo.id === id)
    setNewTodo({
      ...editTodo
    })
  }

  const handleChangeTitle = (e) => {
    setNewTodo({ ...newTodo, title: e.target.value });
  };

  const handleChangeContent = (e) => {
    setNewTodo({ ...newTodo, content: e.target.value });
  };

  const updateTodo = () => {
    const indexUpdateTodo = todoList.findIndex(todo => todo.id === newTodo.id);
    const newTodoList = [...todoList];
    if (indexUpdateTodo > -1) {
      newTodoList[indexUpdateTodo] = newTodo;
      setTodoList(newTodoList);
      setIsEdit(false);
      setNewTodo({
        id: uuidv1(),
        title: "",
        content: "",
        status: "todo",
      });
    }
  }
  return (
    <div>
      <h1>TodoList</h1>
      <label htmlFor="title">Tiêu đề</label>
      <input
        id="title"
        value={newTodo.title}
        onChange={handleChangeTitle}
      />{" "}
      <br />
      <label htmlFor="Mô tả">Nội dung</label>
      <textarea
        id="content"
        value={newTodo.content}
        onChange={handleChangeContent}
      />
      <button onClick={isEdit ? updateTodo : addTodo}>{isEdit ? 'Update' : 'Add'}</button>
      <TableTodo todoList={todoList} deleteTodo={deleteTodo} editTodo={editTodo} isEdit={isEdit} />
    </div>
  );
}
