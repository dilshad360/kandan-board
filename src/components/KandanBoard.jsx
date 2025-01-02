import React, { useState } from 'react'
import TaskCard from './TaskCard'
import { useDrop } from 'react-dnd'
import TaskColumns from './TaskColumn';

const initialColumns = {
    todo: {
        name: "To Do",
        items: [
            { id: "1", content: "Task 1" },
            { id: "2", content: "Task 2" },
        ],
    },
    inProgress: {
        name: "In Progress",
        items: [
            { id: "3", content: "Task 3" },
            { id: "4", content: "Task 4" },
        ],
    },
    done: {
        name: "Done",
        items: [{ id: "5", content: "Task 5" }],
    },
};

function KandanBoard() {

    const [columns, setColumns] = useState(initialColumns);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => console.log(item.id)
    }))

    const moveCard = (source, destination) => {
        const sourceColumn = columns[source.droppableId];
        const destinationColumn = columns[destination.droppableId];
    
        const sourceItems = [...sourceColumn.items];
        const destinationItems = [...destinationColumn.items];
    
        // Remove the card from the source column
        const [removed] = sourceItems.splice(source.index, 1);
    
        // Add the card to the destination column
        destinationItems.splice(destination.index, 0, removed);
    
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destinationColumn,
            items: destinationItems,
          },
        });
    };

    return (
        <div className="py-10 px-20 flex gap-2 h-screen">

            {Object.entries(columns).map(([columnId, column]) => (
                <TaskColumns
                    key={columnId}
                    columnId={columnId}
                    column={column}
                moveCard={moveCard}
                />
            ))}

            {/* <div className="border-2 border-blue-500 w-1/3 p-2 rounded-md h-full space-y-2" >
                <TaskCard />
            </div>

            <div className="border-2 border-blue-500 w-1/3 p-2 rounded-md space-y-2" ref={drop}>
                <TaskCard />
                <TaskCard />
            </div> */}

        </div>
    )
}

export default KandanBoard