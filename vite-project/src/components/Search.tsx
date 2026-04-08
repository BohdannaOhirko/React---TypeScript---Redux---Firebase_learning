import { useState, useMemo } from "react";
import SearchApp from "./SearchFilter";
type Task = {
  id: number;
  title: string;
  done: boolean;
};
const tasks: Task[] = [
  {
    id: 1,
    title: "Встановити React-проєкт (Vite або Create React App)",
    done: true,
  },
  { id: 2, title: "Розібратися з компонентами", done: true },
  { id: 3, title: "Вивчити props і як передавати дані", done: false },
  { id: 4, title: "Зрозуміти state і useState", done: false },
];
function Search() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const filtered = useMemo(() => {
    return tasks
      .filter((task: Task) =>
        task.title.toLowerCase().includes(query.toLowerCase()),
      )
      .filter((task: Task) => {
        if (status === "all") return true;
        if (status === "active") return !task.done;
        if (status === "done") return task.done;
      });
  }, [tasks, query, status]);

  return (
    <div>
      <SearchApp query={query} onSearch={(e) => setQuery(e)} />
      <button
        className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
        type="submit"
        onClick={() => setStatus("all")} //викличуть, коли натиснуть ()=>setStatus('all)
      >
        All tasks
      </button>
      <button
        className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600"
        type="submit"
        onClick={() => setStatus("active")}
      >
        Active
      </button>
      <button
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        type="submit"
        onClick={() => setStatus("done")}
      >
        Done
      </button>
      <ul>
        {filtered.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Search;
