import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { useDrag } from "react-dnd";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import ViewTaskModal from "./modal/ViewTaskModal";

function TaskCard({ task, source, deleteTask }) {

    const [isOpen, setIsOpen] = useState(false);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "card",
        item: { ...task, source },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <>
            <Card
                onClick={() => { setIsOpen(true) }}
                ref={drag}
                className={`${isDragging ? "opacity-50" : "opacity-100"
                    } p-2 shadow-md bg-zinc-50  hover:scale-[103%] transition duration-300 ease-in-out`}
            >
                <CardContent className="flex flex-col px-2 pt-0 pb-2">
                    <div className="flex justify-between items-center">
                    <h3>{task.title}</h3>
                    
                    <Button
                        className="hover:bg-red-400"
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                            deleteTask(source, task.id);
                        }}
                    >
                        <X className="opacity-50" />
                    </Button>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-1">{task.description}</p>
                </CardContent>
            </Card>
            <ViewTaskModal task={task} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}

export default TaskCard;
