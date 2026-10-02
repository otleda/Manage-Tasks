import { useState } from "react";
import AddTask from "./componets/AddTask";
import Tasks from "./componets/Tasks";

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

  //   function onTaskClick(taskId) {
  //     setTasks((currentTasks) =>
  //       currentTasks.map((task) =>
  //         task.id === taskId
  //           ? { ...task, isCompleted: !task.isCompleted }
  //           : task
  //       )
  //     );
  //   }

  return (
    <div className="w-screen h-screen bg-[#23272f] flex justify-center p-6">
      <div className="w=[500px]">
        <h1 className="text-3xl text-center text-orange-400 font-Roboto">
          Book to study
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
