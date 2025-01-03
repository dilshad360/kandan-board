import React, { useEffect, useState } from "react";
import TaskColumn from "./TaskColumn";
import AddTaskModal from "./modal/AddTaskModal";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Input } from "./ui/input";
import { handleConfetti } from "@/lib/confetti";

function KandanBoard() {
    const [todo, setTodo] = useLocalStorage("todoTasks", []);
    const [inProgress, setInProgress] = useLocalStorage("inProgressTasks", []);
    const [done, setDone] = useLocalStorage("doneTasks", []);
    const [searchTerm, setSearchTerm] = useState("");

    const addNewTask = (content) => {
        setTodo((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                title: content.title,
                description: content.description,
            },
        ]);
    };

    const moveCard = (source, destination, task) => {
        // Remove the task from the source column
        if (source === "todo")
            setTodo((prev) => prev.filter((t) => t.id !== task.id));
        if (source === "inProgress")
            setInProgress((prev) => prev.filter((t) => t.id !== task.id));
        if (source === "done")
            setDone((prev) => prev.filter((t) => t.id !== task.id));

        // Add the task to the destination column
        if (destination === "todo") setTodo((prev) => [...prev, task]);
        if (destination === "inProgress") setInProgress((prev) => [...prev, task]);
        if (destination === "done") { setDone((prev) => [...prev, task]); handleConfetti() }
    };

    const deleteTask = (columnId, taskId) => {
        if (columnId === "todo")
            setTodo((prev) => prev.filter((t) => t.id !== taskId));
        if (columnId === "inProgress")
            setInProgress((prev) => prev.filter((t) => t.id !== taskId));
        if (columnId === "done")
            setDone((prev) => prev.filter((t) => t.id !== taskId));
    };

    const filteredTasks = (tasks) =>
        tasks.filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className="py-10 md:w-[90%] lg:w-[70%] flex flex-col gap-2 h-screen">
            <h1 className="text-3xl font-bold">Kandan Board</h1>
            <div className="flex justify-between">
                <Input
                    placeholder="Search"
                    className="w-[260px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <AddTaskModal addNewTask={addNewTask} />
            </div>
            <div className="flex h-screen gap-3">
                <TaskColumn
                    columnName="To Do"
                    tasks={filteredTasks(todo)}
                    columnId="todo"
                    deleteTask={deleteTask}
                    moveCard={moveCard}
                />
                <TaskColumn
                    columnName="In Progress"
                    tasks={filteredTasks(inProgress)}
                    columnId="inProgress"
                    deleteTask={deleteTask}
                    moveCard={moveCard}
                />
                <TaskColumn
                    columnName="Done"
                    tasks={filteredTasks(done)}
                    columnId="done"
                    deleteTask={deleteTask}
                    moveCard={moveCard}
                />
            </div>
        </div>
    );
}

export default KandanBoard;
