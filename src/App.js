import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-around">
        <TodoList />
        <Counter />
      </div>
    </div>
  );
}
