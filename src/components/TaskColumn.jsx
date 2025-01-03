import React from "react";
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";

function TaskColumn({ columnName, tasks, columnId, moveCard, deleteTask }) {
  const [, drop] = useDrop({
    accept: "card",
    drop: (item) => {
      if (item.source !== columnId) {
        moveCard(item.source, columnId, item);
      }
    },
  });

  return (
    <div
      ref={drop}
      className="border-2 border-gray-400 bg-gray-200 w-1/3 p-3 rounded-md space-y-2 "
    >
      <h1 className="text-xl text-gray-500 font-bold ">{columnName}</h1>
      {tasks.map((task) => (
        <TaskCard
          deleteTask={deleteTask}
          key={task.id}
          task={task}
          source={columnId} // Pass the current column ID as the source
        />
      ))}
    </div>
  );
}

export default TaskColumn;
