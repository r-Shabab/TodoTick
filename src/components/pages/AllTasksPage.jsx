import { useContext } from "react";
import TaskLayout from "../tasks/TaskLayout";
import { MdDoneAll } from "react-icons/md";
import TaskContext from "../context/TaskContext";

const AllTasksPage = () => {
  const { todos } = useContext(TaskContext);

  const sortedTodos = todos
    .filter(todo => !todo.deleted)
    .sort((a, b) => {
      if (a.pinned === b.pinned) return 0;
      return a.pinned ? -1 : 1;
    });

  return (
    <section className="lg:pt-3.5">
      <div className="mx-auto w-full space-y-3">
        <div className="rounded-md bg-color-tasks-bg p-4 shadow-md hover:cursor-pointer hover:bg-color-sidebar/70">
          <div className="w-full">
            <h3 className="flex items-center space-x-2 font-title text-sm font-medium lg:text-base">
              <MdDoneAll className="size-7 text-blue-500" />
              <span className="font-title text-lg text-color-text">Todos</span>
            </h3>
          </div>
        </div>
        <div>
          <ul className="flex flex-col space-y-4">
            {sortedTodos.map((todo) => (
              <li key={todo.id} className="w-full rounded-lg bg-color-tasks-bg py-3">
                <div className="flex items-center py-2">
                  <TaskLayout taskId={todo.id}>{todo.task}</TaskLayout>
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