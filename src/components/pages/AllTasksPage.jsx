import { useEffect, useState } from "react";
import TaskLayout from "../tasks/TaskLayout";
import { MdDoneAll } from "react-icons/md";
import { TbPinnedFilled } from "react-icons/tb";
const AllTasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <section className="lg:pt-3.5">
      <div className="mx-auto w-full space-y-5">
        <div className="rounded-md bg-color-tasks-bg p-3 shadow-md">
          <div className="w-full border-b-2 border-color-text/50 p-2">
            <h3 className="flex items-center space-x-2 font-title text-sm font-medium lg:text-base">
              <TbPinnedFilled className="size-7" />
              <span className="text-color-text">Pinned</span>
            </h3>
          </div>
          <ul className="bg-color-tasks-bg">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="w-full border-b border-gray-400 border-opacity-20 py-1 last:border-b-0"
              >
                <div className="flex items-center py-4">
                  <TaskLayout taskId={task.id}>{task.task}</TaskLayout>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md bg-color-tasks-bg p-3 shadow-md">
          <div className="w-full border-b-2 border-color-text/50 p-2">
            <h3 className="flex items-center space-x-2 font-title text-sm font-medium lg:text-base">
              <MdDoneAll className="size-7" />
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
                  <TaskLayout taskId={task.id}>{task.task}</TaskLayout>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AllTasksPage;
