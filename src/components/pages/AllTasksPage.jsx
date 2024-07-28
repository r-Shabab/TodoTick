import { useState, useContext } from "react";
import TaskLayout from "../tasks/TaskLayout";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import TaskContext from "../context/TaskContext";
import { BsListUl, BsCheck2Circle, BsPinFill  } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
const AllTasksPage = () => {
  const { todos } = useContext(TaskContext);

  const sortedTodos = todos
    .filter(todo => !todo.deleted)
    .sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));

  // Filter todos for each section
  const pinnedTodos = sortedTodos.filter(todo => todo.pinned);
  const completedTodos = sortedTodos.filter(todo => todo.completed);
  const allTodos = sortedTodos.filter(todo => !todo.completed && !todo.pinned);

  // State for toggling sections
  const [isPinnedOpen, setPinnedOpen] = useState(true);
  const [isTodosOpen, setTodosOpen] = useState(true);
  const [isCompletedOpen, setCompletedOpen] = useState(true);
  const [isDeletedOpen, setDeletedOpen] = useState(true);

  return (
    <section className="flex flex-col space-y-5 lg:pt-3.5">
      {/* Pinned */}
      {pinnedTodos.length > 0 && (
        <div className="mx-auto w-full space-y-3">
          <div
            className="rounded-md bg-color-tasks-bg p-4 shadow-md hover:cursor-pointer hover:bg-color-sidebar/70 flex items-center justify-between"
            onClick={() => setPinnedOpen(!isPinnedOpen)}
          >
            <div className="flex items-center space-x-2">
              <BsPinFill  className="size-7 text-yellow-500" />
              <span className="font-title font-semibold text-lg text-color-text">Pinned</span>
            </div>
            {isPinnedOpen ? <MdExpandLess className="text-gray-500 size-7" /> : <MdExpandMore className="text-gray-500 size-7" />}
          </div>
          {isPinnedOpen && (
            <div>
              <ul className="flex flex-col space-y-4">
                {pinnedTodos.map(todo => (
                  <li key={todo.id} className="w-full rounded-lg bg-color-tasks-bg py-3">
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

      {/* Todos */}
      {allTodos.length > 0 && (
        <div className="mx-auto w-full space-y-3">
          <div
            className="rounded-md bg-color-tasks-bg p-4 shadow-md hover:cursor-pointer hover:bg-color-sidebar/70 flex items-center justify-between"
            onClick={() => setTodosOpen(!isTodosOpen)}
          >
            <div className="flex items-center space-x-2">
              <BsListUl className="size-7 text-blue-500" />
              <span className="font-title font-semibold text-lg text-color-text">Todos</span>
            </div>
            {isTodosOpen ? <MdExpandLess className="text-gray-500 size-7" /> : <MdExpandMore className="text-gray-500 size-7" />}
          </div>
          {isTodosOpen && (
            <div>
              <ul className="flex flex-col space-y-4">
                {allTodos.map(todo => (
                  <li key={todo.id} className="w-full rounded-lg bg-color-tasks-bg py-3">
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

      {/* Completed */}
      {completedTodos.length > 0 && (
        <div className="mx-auto w-full space-y-3">
          <div
            className="rounded-md bg-color-tasks-bg p-4 shadow-md hover:cursor-pointer hover:bg-color-sidebar/70 flex items-center justify-between"
            onClick={() => setCompletedOpen(!isCompletedOpen)}
          >
            <div className="flex items-center space-x-2">
              <BsCheck2Circle className="size-7 text-green-500" />
              <span className="font-title font-semibold text-lg text-color-text">Completed</span>
            </div>
            {isCompletedOpen ? <MdExpandLess className="text-gray-500 size-7" /> : <MdExpandMore className="text-gray-500 size-7" />}
          </div>
          {isCompletedOpen && (
            <div>
              <ul className="flex flex-col space-y-4">
                {completedTodos.map(todo => (
                  <li key={todo.id} className="w-full rounded-lg bg-color-tasks-bg py-3">
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

      {/* Deleted */}
      {todos.some(todo => todo.deleted) && (
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
                {todos
                  .filter(todo => todo.deleted)
                  .map(todo => (
                    <li
                      key={todo.id}
                      className="w-full rounded-lg bg-color-delete-btn/15 py-3 "
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

export default AllTasksPage;
