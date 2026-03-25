import { useState, useEffect } from "react";

type TaskFormProps = {
  onAdd: (title: string, description: string) => void;
};
function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) {
      setError("Введи назву");
      return;
    }
    onAdd(title, description);
    setTitle(""); // очищаємо title
    setDescription(""); // очищаємо description
    setError("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 max-w-md">
      <input
        value={title}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        onChange={(e) => setTitle(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <textarea
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 resize-none h-24"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        type="submit"
      >
        Додати
      </button>
    </form>
  );
}
//далі отримує пропси батько
type Task = {
  id: number;
  title: string;
  description: string;
};
function TaskQueue() {
  const [tasks, setTasks] = useState<Task[]>([]); //масив об'єктів типу Task
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // кожного разу, коли змінюється завдання, тому ми вказуємо залежності, масив завдань
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved)); // один раз при старті
    }
  }, []);

  const deleted = () => {
    setTasks([]);
    localStorage.clear();
  };
  const addTask = (title: string, description: string) => {
    setTasks([...tasks, { id: Date.now(), title, description }]);
  };

  return (
    <div>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <div
          key={task.id}
          className=" flex flex-col gap-3 p-4 max-w-md  border border-gray-200 rounded  "
        >
          <p className="font-medium">{task.title}</p>
          <p className="text-gray-500 text-sm">{task.description}</p>
        </div>
      ))}
      <button
        className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
        type="submit"
        onClick={deleted}
      >
        Очистити сховище
      </button>
    </div>
  );
}

export default TaskQueue;
