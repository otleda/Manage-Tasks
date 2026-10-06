import { ChevronRight, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTask }) {
  return (
    <ul className={`space-y-4 w-\[360px\] p-6 bg-mist-900 rounded-md shadow`}>
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-amber-100 p-3 w-\[200px\] rounded-md text-left shadow, ${task.isCompleted && "line-through text-amber-500"}`}>
            {task.book}
          </button>

          <button className="bg-amber-300 p-3 rounded-md shadow">
            <ChevronRight />
          </button>

          <button
            onClick={() => onDeleteTask(task.id)}
            className="bg-amber-500 p-3 rounded-md shadow">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
