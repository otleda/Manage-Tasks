import { ChevronRight } from "lucide-react";

function Tasks(props) {
  console.log(props);
  return (
    <ul className="space-y-4 p-6 bg-amber-50 rounded-md shadow-2xl">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-amber-100 p-3 w-full rounded-md text-left shadow, ${task.isCompleted && "line-through text-red-400"}`}>
            {task.book}
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
