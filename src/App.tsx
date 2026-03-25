import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import Task from "./components/Task";
import TaskList from "./components/TaskList";
import TaskQueue from "./components/TaskForm";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Task
        title="Купити сукню"
        isCompleted={false}
        description="Тонку, шовкову "
      />
      <Task
        title="Зробити домашнє завдання"
        isCompleted={true}
        description="React пропси"
      />
      <Task title="Подзвонити мамі" isCompleted={false} description="Увечері" /> */}
      {/* <TaskList /> */}
      <TaskQueue />
    </div>
  );
}
export default App;
