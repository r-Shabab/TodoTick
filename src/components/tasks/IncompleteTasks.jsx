import TaskLayout from "./TaskLayout";
import { LuListTodo } from "react-icons/lu";

const IncompleteTasks = () => {
  const tasks = [
    {
      id: "c-1",
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora.",
    },
    { id: "c-2", label: "Go outside" },
    { id: "c-3", label: "Learn JS" },
    { id: "c-4", label: "Dinner with family" },
    { id: "c-5", label: "Call a friend" },
    {
      id: "c-1",
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora.",
    },
    { id: "c-2", label: "Go outside" },
    { id: "c-3", label: "Learn JS" },
    { id: "c-4", label: "Dinner with family" },
    { id: "c-5", label: "Call a friend" },
  ];

  return (
    <section className="lg:pt-3.5">
      <div className="mx-auto w-full space-y-5">
        <div className="rounded-md bg-color-tasks-bg p-3 shadow-md">
          <div className="w-full border-b-2 border-color-text/50 p-2">
            <h3 className="flex items-center space-x-2 font-mono text-sm font-semibold lg:text-base">
              <LuListTodo className="h-5 w-5 text-color-primary-btn lg:h-6 lg:w-6" />
              <span className="text-color-text">Todos</span>
            </h3>
          </div>
          <ul className="bg-color-tasks-bg">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="w-full border-b border-gray-400 border-opacity-20 py-1 last:border-b-0"
              >
                <div className="flex items-center py-4">
                  <TaskLayout id={task.id}>{task.label}</TaskLayout>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IncompleteTasks;
