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

  return (
    <div className="w-screen h-screen bg-[#23272f] flex justify-center p-6">
      <div className="w=[500px]">
        <h1 className="text-3xl text-center text-orange-400">Manager Tasks</h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
