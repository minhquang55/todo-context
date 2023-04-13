import { useState } from "react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import ThemeContext from "./components/context/themeContext";

export default function Home() {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <div className={theme === 'dark' && 'dark-bg'}>
        <Header />
        <div className="d-flex justify-content-around">
          <TodoList />
          <Counter />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
