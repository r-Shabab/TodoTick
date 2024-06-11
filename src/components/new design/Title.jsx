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
      <h3 className="font-title text-3xl font-semibold">All Tasks</h3>
      <p className="text-md font-title text-gray-400"> {formattedDate} </p>
    </div>
  );
};
