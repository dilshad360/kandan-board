import React from 'react'
import { Card, CardContent } from './ui/card'
import { useDrag } from 'react-dnd'


function TaskCard() {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'card',
        item: {id: 1},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
        

  return (
    <Card ref={drag} className={`${isDragging ? 'bg-pink-400' : 'bg-slate-100'}`}>
        <CardContent>
            test
        </CardContent>
    </Card>
  )
}

export default TaskCard