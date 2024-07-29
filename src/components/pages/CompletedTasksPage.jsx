import React, { useState, useContext } from "react";
import TaskLayout from "../tasks/TaskLayout";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import TaskContext from "../context/TaskContext";
import { BsCheck2Circle } from "react-icons/bs";

const CompletedTasksPage = () => {
  const { todos, sortOption, sortTodos } = useContext(TaskContext);

  const sortedTodos = sortTodos(todos, sortOption);
  const completedTodos = sortedTodos.filter(
    (todo) => todo.completed && !todo.deleted,
  );

  const [isCompletedOpen, setCompletedOpen] = useState(true);

  return (
    <section className="flex flex-col space-y-5 lg:pt-3.5">
      {/* Completed */}
      {completedTodos.length > 0 && (
        <div className="mx-auto w-full space-y-3">
          <div
            className="flex items-center justify-between rounded-md bg-color-tasks-bg p-4 shadow-md hover:cursor-pointer hover:bg-color-sidebar/70"
            onClick={() => setCompletedOpen(!isCompletedOpen)}
          >
            <div className="flex items-center space-x-2">
              <BsCheck2Circle className="size-7 text-green-500" />
              <span className="font-title text-lg font-semibold text-color-text">
                Completed
              </span>
            </div>
            {isCompletedOpen ? (
              <MdExpandLess className="size-7 text-gray-500" />
            ) : (
              <MdExpandMore className="size-7 text-gray-500" />
            )}
          </div>
          {isCompletedOpen && (
            <div>
              <ul className="flex flex-col space-y-4">
                {completedTodos.map((todo) => (
                  <li
                    key={todo.id}
                    className="w-full rounded-lg bg-color-tasks-bg py-3"
                  >
                    <div className="flex items-center py-2">
                      <TaskLayout taskId={todo.id}>{todo.task}</TaskLayout>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default CompletedTasksPage;
