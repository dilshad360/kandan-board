import React from "react";
import { Card, CardContent } from "./ui/card";
import { useDrag } from "react-dnd";

function TaskCard({ task, source }) {
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
            className={`${isDragging ? "bg-pink-400" : "bg-slate-100"
                } p-2 shadow-md rounded`}
        >
            <CardContent>{task.content}</CardContent>
        </Card>
    );
}

export default TaskCard;
