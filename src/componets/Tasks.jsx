import { ChevronRight } from "lucide-react";

function Tasks(props) {
  console.log(props);
  return (
    <ul className="space-y-4 p-6 bg-amber-50 rounded-md shadow-2xl">
      {props.tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button className="bg-amber-100 p-3 w-full rounded-md text-left shadow">
            {tasks.book}
          </button>

          <button className="bg-amber-200 p-3 rounded-md shadow">
            <ChevronRight />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
