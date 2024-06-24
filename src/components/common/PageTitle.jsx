export default function PageTitle() {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <div>
      <h3 className="font-title text-2xl font-semibold text-color-text lg:text-4xl">
        All Tasks
      </h3>
      <p className="font-title text-sm text-gray-400 lg:text-base">
        {" "}
        {formattedDate}{" "}
      </p>
    </div>
  );
}
