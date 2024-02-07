import { reducerTG } from "./reducer/triviaGame";
import {useReducer} from "react"
function App() {
  const [state,dispach]= useReducer(reducerTG,reducerTG())
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
