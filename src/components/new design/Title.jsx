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
      <h3 className="font-title text-2xl font-semibold lg:text-3xl">
        All Tasks
      </h3>
      <p className="lg:text-md font-title text-sm text-gray-400">
        {" "}
        {formattedDate}{" "}
      </p>
    </div>
  );
};
