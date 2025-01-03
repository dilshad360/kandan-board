import React from "react";
import { Card, CardContent } from "./ui/card";
import { useDrag } from "react-dnd";
import { Button } from "./ui/button";
import { X } from "lucide-react";

function TaskCard({ task, source, deleteTask }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "card",
        item: { ...task, source },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <Card
            ref={drag}
            className={`${isDragging ? "bg-pink-400" : ""
                } p-2 shadow-md bg-slate-100 rounded hover:scale-[103%] transition duration-300 ease-in-out`}
        >
            <CardContent className="flex justify-between items-center px-2 py-0">
                <h3>{task.title}</h3>
                <Button
                    variant="secondary"
                    className="hover:bg-red-400"
                    size="icon"
                    onClick={() => {
                        deleteTask(source, task.id);
                    }}
                >
                    <X className="opacity-50"/>
                </Button>
            </CardContent>
        </Card>
    );
}

export default TaskCard;
