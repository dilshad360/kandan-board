import React from "react";
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";

function TaskColumn({ columnName, tasks, columnId, moveCard }) {
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
      className="border-2 border-blue-500 w-1/3 p-2 rounded-md h-full space-y-2"
    >
      <h1 className="text-xl font-bold">{columnName}</h1>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          source={columnId} // Pass the current column ID as the source
        />
      ))}
    </div>
  );
}

export default TaskColumn;
