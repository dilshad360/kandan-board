import React, { useState } from "react";
import TaskColumn from "./TaskColumn";

const initialTasks = {
    todo: [
        { id: "1", content: "Task 1" },
        { id: "2", content: "Task 2" },
    ],
    inProgress: [
        { id: "3", content: "Task 3" },
        { id: "4", content: "Task 4" },
    ],
    done: [{ id: "5", content: "Task 5" }],
};

function KandanBoard() {

    
    const [todo, setTodo] = useState(initialTasks.todo);
    const [inProgress, setInProgress] = useState(initialTasks.inProgress);
    const [done, setDone] = useState(initialTasks.done);

    const moveCard = (source, destination, task) => {
        // Remove the task from the source column
        if (source === "todo") setTodo((prev) => prev.filter((t) => t.id !== task.id));
        if (source === "inProgress") setInProgress((prev) => prev.filter((t) => t.id !== task.id));
        if (source === "done") setDone((prev) => prev.filter((t) => t.id !== task.id));

        // Add the task to the destination column
        if (destination === "todo") setTodo((prev) => [...prev, task]);
        if (destination === "inProgress") setInProgress((prev) => [...prev, task]);
        if (destination === "done") setDone((prev) => [...prev, task]);
    };

    return (
        <div className="py-10 px-20 flex gap-2 h-screen">
            <TaskColumn
                columnName="To Do"
                tasks={todo}
                columnId="todo"
                moveCard={moveCard}
            />
            <TaskColumn
                columnName="In Progress"
                tasks={inProgress}
                columnId="inProgress"
                moveCard={moveCard}
            />
            <TaskColumn
                columnName="Done"
                tasks={done}
                columnId="done"
                moveCard={moveCard}
            />
        </div>
    );
}

export default KandanBoard;
