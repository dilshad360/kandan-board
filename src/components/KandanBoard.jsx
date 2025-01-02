import React, { useState } from "react";
import TaskColumn from "./TaskColumn";
import AddTaskModal from "./AddTaskModal";


const initialTasks = {
    todo: [
        { id: "1", title: "Task 1" },
        { id: "2", title: "Task 2" },
    ],
    inProgress: [
        { id: "3", title: "Task 3" },
        { id: "4", title: "Task 4" },
    ], 
    done: [{ id: "5", title: "Task 5" }],
};

function KandanBoard() {


    const [todo, setTodo] = useState(initialTasks.todo);
    const [inProgress, setInProgress] = useState(initialTasks.inProgress);
    const [done, setDone] = useState(initialTasks.done);

    const addNewTask = (content) => {
        setTodo((prev) => [...prev, { id: Date.now().toString(), title: content.title, description: content.description }]);
    };

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

    const deleteTask = (columnId, taskId) => {
        if (columnId === "todo") setTodo((prev) => prev.filter((t) => t.id !== taskId));
        if (columnId === "inProgress") setInProgress((prev) => prev.filter((t) => t.id !== taskId));
        if (columnId === "done") setDone((prev) => prev.filter((t) => t.id !== taskId));
    }

    return (
        <div className="py-10 w-[70%] flex flex-col gap-2 h-screen">
            <div className="flex justify-between">
            <AddTaskModal addNewTask={addNewTask} />
            </div>
            <div className="flex h-screen gap-3">
                <TaskColumn
                    columnName="To Do"
                    tasks={todo}
                    columnId="todo"
                    deleteTask={deleteTask}
                    moveCard={moveCard}
                />
                <TaskColumn
                    columnName="In Progress"
                    tasks={inProgress}
                    columnId="inProgress"
                    deleteTask={deleteTask}
                    moveCard={moveCard}
                />
                <TaskColumn
                    columnName="Done"
                    tasks={done}
                    columnId="done"
                    deleteTask={deleteTask}
                    moveCard={moveCard}
                />
            </div>
        </div>
    );
}

export default KandanBoard;
