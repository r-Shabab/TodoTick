import Task from "./Task";
import { BsPinFill } from "react-icons/bs";
export default function Tasklist() {
  const tasks = [
    {
      id: "c-1",
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore nostrum minima aperiam vitae ut unde aut incidunt maiores inventore!",
    },
    { id: "c-2", label: "Go outside" },
    { id: "c-3", label: "Learn JS" },
    { id: "c-4", label: "Dinner with family" },
    { id: "c-5", label: "Call a friend" },
  ];

  return (
    <section className="h-dvh bg-slate-100 lg:pt-3.5">
      <div className="mx-auto w-full space-y-5 p-4 lg:container">
        <h2 className="font-raleway text-center text-xl font-bold underline decoration-emerald-400 underline-offset-4 lg:text-3xl">
          Tasks
        </h2>
        <div className="rounded-md bg-white p-3 shadow-lg">
          <div className="w-full border-b-2 border-b-emerald-400 p-2">
            <h3 className="text-md flex items-center space-x-2 font-mono">
              <BsPinFill className="h-5 w-5 text-emerald-800" />
              <span>Pinned</span>
            </h3>
          </div>
          <ul className="bg-white">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="w-full border-b border-gray-400 border-opacity-20 py-1 last:border-b-0"
              >
                <div className="bg flex items-center py-4">
                  <Task id={task.id}>{task.label}</Task>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
