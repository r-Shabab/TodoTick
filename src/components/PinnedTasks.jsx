import Task from "./Task";
import { BsPinFill } from "react-icons/bs";
export default function PinnedTasks() {
  const tasks = [
    { id: "c-2", label: "Go outside" },
    { id: "c-3", label: "Learn JS" },
    { id: "c-5", label: "Call a friend" },
  ];
  return (
    <section className="lg:pt-3.5">
      <div className="mx-auto w-full space-y-5 p-4 lg:container">
        <div className="rounded-md bg-white p-3 shadow-md">
          <div className="w-full border-b-2 p-2">
            <h3 className="text-md flex items-center space-x-2 font-mono">
              <BsPinFill className="text-primary1 h-5 w-5" />
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
