import FramerCheckbox from "./FramerCheckbox";

export default function Tasklist() {
  const tasks = [
    { id: "c-1", label: "Walk the dog" },
    { id: "c-2", label: "Go outside" },
    { id: "c-3", label: "Learn JS" },
    { id: "c-4", label: "Dinner with family" },
    { id: "c-5", label: "Call a friend" },
  ];

  return (
    <section>
      <div className="w-full space-y-5 p-4">
        <h2 className="text-center text-xl font-bold underline decoration-emerald-400 underline-offset-4">
          Inbox
        </h2>
        <div className="rounded-md bg-white p-3 shadow-lg">
          <ul className="space-y-5 rounded-lg bg-white">
            {tasks.map((task) => (
              <li key={task.id} className="rounded-lg">
                <div className="flex items-center p-4">
                  <FramerCheckbox id={task.id}>
                    <FramerCheckbox.Indicator />
                    <FramerCheckbox.Label>{task.label}</FramerCheckbox.Label>
                  </FramerCheckbox>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
