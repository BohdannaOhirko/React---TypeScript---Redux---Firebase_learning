import { useState } from "react";

type TaskProps = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  onToggle: () => void;
};

function Task({ id, title, description, isCompleted, onToggle }: TaskProps) {
  const taskDone = {
    color: "green",
  };
  const taskNotYet = {
    color: "red",
  };

  return (
    <div style={isCompleted ? taskDone : taskNotYet}>
      <h3>
        {id}.{title}
      </h3>
      <p>{description}</p>
      <button
        onClick={onToggle}
        className={`px-5 py-2 rounded text-white ${isCompleted ? "bg-green-500" : "bg-red-500"}`}
      >
        {isCompleted ? "Done" : "Not yet"}
      </button>
    </div>
  );
}

//second component gets props from Task

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Назва", description: "Опис", isCompleted: false },
    { id: 2, title: "Назва 2", description: "Опис 2", isCompleted: true },
    { id: 3, title: "Назва 3", description: "Опис 3", isCompleted: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isCompleted={task.isCompleted}
          onToggle={() => toggleTask(task.id)}
        />
      ))}
    </div>
  );
}
export default TaskList;
