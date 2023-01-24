import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard(props) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div key={props.task.id} className="bg-gray-800 text-white p-4 rounded-md ">
      <h1 className="text-xl font-bold capitalize">{props.task.tittle}</h1>
      <p className=" text-gray-500">{props.task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(props.task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
