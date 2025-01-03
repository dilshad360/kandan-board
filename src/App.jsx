import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import KandanBoard from "./components/KandanBoard";
import { Computer } from "lucide-react";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="md:hidden flex justify-center flex-col  h-screen text-gray-400 p-10 gap-2">
        <Computer className="w-20 h-20 " />
        <p className="text-xl">Oops! For the best experience, use a laptop or tablet. </p>
      </div>
      <div className="md:flex justify-center hidden">
        <KandanBoard />
      </div>
    </DndProvider>
  );
}

export default App;
