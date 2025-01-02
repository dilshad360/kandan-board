import React from 'react'
import TaskCard from './TaskCard'

function TaskColumn({column}) {
  return (
    <div className="border-2 border-blue-500 w-1/3 p-2 rounded-md h-full space-y-2" >
        <h1 className="text-xl font-bold">{column.name}</h1>
        {column.items.map((item, index) => (
          <TaskCard/>
      
      ))}

        </div>
  )
}

export default TaskColumn