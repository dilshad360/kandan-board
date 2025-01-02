import { DndProvider, useDrop  } from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import TaskCard from "./components/TaskCard"
import { useState } from "react"
import KandanBoard from "./components/KandanBoard"





function App() {

 


  return (
    <DndProvider backend={HTML5Backend}>
        <KandanBoard/>
      </DndProvider>
  )
}

export default App
