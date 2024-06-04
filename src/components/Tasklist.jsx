export default function Tasklist() {
  return (
    <section>
      <div className="w-full space-y-5 p-4">
        <h2 className="text-center text-xl font-bold underline decoration-emerald-400 underline-offset-4">
          Inbox
        </h2>
        <div className="rounded-md bg-emerald-100 p-3 shadow-lg">
          <ul className="space-y-5 rounded-lg bg-blue-200">
            <li className="rounded-lg bg-red-300">
              <label htmlFor="list1" className="h-2/12 w-2/12 bg-slate-100">
                <input
                  type="checkbox"
                  name="list1"
                  id="list1"
                  className="appearance-none"
                />
              </label>
              Walk the dog
            </li>
            <li>Go outside</li>
            <li>Learn JS</li>
            <li>Dinner with family</li>
            <li>Call a friend</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
