import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import KandanBoard from "./components/KandanBoard";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center">
        <KandanBoard />
      </div>
    </DndProvider>
  );
}

export default App;
