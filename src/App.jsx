import { useState } from "react";
import AddTask from "./componets/AddTask";
import Tasks from "./componets/Tasks";
import { ReceiptRussianRuble } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      book: "Atomic Design ",
      autor: "Brad Frost",
      isCompleted: false,
    },
    {
      id: 2,
      book: "Design Systems",
      autor: "Alla Kholmatova",
      isCompleted: false,
    },
    {
      id: 3,
      book: "Architecture to Sofware",
      autor: "Robert C. Martin - Uncle Bob",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTask = tasks.filter((task) => {
      if (task.id !== taskId) {
        return task;
      }
    });
    return setTasks(newTask);
  }

  return (
    <div className="w-screen h-screen bg-[#23272f] flex justify-center p-6">
      <div className="w=[500px]">
        <h1 className="text-2xl text-center text-amber-50 font-Roboto">
          Programming books
        </h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
