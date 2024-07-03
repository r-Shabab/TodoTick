// Task.jsx
import { TaskProvider } from "../contexts/TaskContext";
import TaskCheckbox from "./TaskCheckbox";
import TaskName from "./TaskName";
// import EditButton from "../common/buttons/EditButton";
// import DeleteButton from "../common/buttons/DeleteButton";

// eslint-disable-next-line react/prop-types
const TaskLayout = ({ taskId, children, isChecked }) => {
  return (
    <div className="flex w-full items-center space-x-2">
      <TaskProvider taskId={taskId}>
        <div className="relative flex items-center">
          <TaskCheckbox taskId={taskId} isChecked={isChecked} />
        </div>

        <div className="group relative flex w-full items-center justify-between">
          <TaskName>{children}</TaskName>
          {/* <div className="absolute right-2 hidden items-center space-x-6 p-2 duration-700 ease-in-out group-hover:flex">
            <EditButton />
            <DeleteButton />
          </div> */}
        </div>
      </TaskProvider>
    </div>
  );
};

export default TaskLayout;
