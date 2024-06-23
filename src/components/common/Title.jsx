export const Title = () => {
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
      <h3 className="text-color-text font-title text-2xl font-semibold lg:text-4xl">
        All Tasks
      </h3>
      <p className="font-title text-sm text-gray-400 lg:text-base">
        {" "}
        {formattedDate}{" "}
      </p>
    </div>
  );
};
