import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const location = useLocation();
  const currentDate = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  // Determine the title based on the current path
  let title = "All Tasks";
  switch (location.pathname) {
    case "/completed-tasks":
      title = "Completed Tasks";
      break;
    case "/deleted-tasks":
      title = "Deleted Tasks";
      break;
    case "/pinned-tasks":
      title = "Pinned Tasks";
      break;
    default:
      title = "All Tasks";
  }

  return (
    <div>
      <h3 className="font-title text-xl text-color-text lg:text-5xl">
        {title}
      </h3>
      <p className="font-todo text-sm text-gray-400 lg:text-base">
        {formattedDate}
      </p>
    </div>
  );
}
