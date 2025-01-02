import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"


function App() {


  return (
      <div className="p-10 flex gap-2 h-screen">
        <div className="border-2 border-blue-500 w-1/4 p-1 rounded-md h-full">
          <Card className="bg-green-500" >
          <CardContent>test</CardContent>
            </Card>
        </div>
        <div className="border-2 border-blue-500 w-1/4 p-1 rounded-md">
          <Card className="bg-green-500" >test</Card>
        </div>
      </div>
  )
}

export default App
