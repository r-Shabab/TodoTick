import React, { useState, useContext } from "react";
import TaskLayout from "../tasks/TaskLayout";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import TaskContext from "../context/TaskContext";
import { AiFillDelete } from "react-icons/ai";

const DeletedTasksPage = () => {
  const { todos } = useContext(TaskContext);

  const deletedTodos = todos.filter(todo => todo.deleted);

  const [isDeletedOpen, setDeletedOpen] = useState(true);

  return (
    <section className="flex flex-col space-y-5 lg:pt-3.5">
      {/* Deleted */}
      {deletedTodos.length > 0 && (
        <div className="mx-auto w-full space-y-3">
          <div
            className="rounded-md bg-color-tasks-bg p-4 shadow-md hover:cursor-pointer hover:bg-color-sidebar/70 flex items-center justify-between"
            onClick={() => setDeletedOpen(!isDeletedOpen)}
          >
            <div className="flex items-center space-x-2">
              <AiFillDelete className="size-7 text-red-500" />
              <span className="font-title font-semibold text-lg text-color-text">Deleted</span>
            </div>
            {isDeletedOpen ? <MdExpandLess className="text-gray-500 size-7" /> : <MdExpandMore className="text-gray-500 size-7" />}
          </div>
          {isDeletedOpen && (
            <div>
              <ul className="flex flex-col space-y-4">
                {deletedTodos.map(todo => (
                  <li key={todo.id} className="w-full rounded-lg bg-color-tasks-bg border-2 border-color-delete-btn/40 py-3">
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

export default DeletedTasksPage;