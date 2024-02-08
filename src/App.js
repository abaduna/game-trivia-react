import TriviaGame from "./componets/TriviaGame";
import { reducerTG } from "./reducer/triviaGame";
import { useReducer } from "react";
import {useEffect} from "react";
function App() {
  const [state, dispach] = useReducer(reducerTG, reducerTG());

  const increment = () => dispach({ type: "INCREMENT" });

  const lossLive = () => dispach({ type: "LOSSLIVE" });
  const questions = [
    {
      preguntas: "de que color es el caballo de Sam Martin",
      option: ["Blanco", "Amarillo", "Violeta"],
    },
    {
      preguntas:
        "Por que san martin iba a la batallas y no se quedaba atras en la batalla de san lorenzo",
      option: [
        "Tenia que demostraer que no era un traindor",
        "Era valiente",
        "No lo hacia",
      ],
    },
  ];
  const { lives, points } = state;
  useEffect(() => {
    const { lives, points } = state;
  }, [state]);
  return (
    <div className="App">
      <p>
        Te quedan {lives} <br /> Los puntos son {points}
      </p>
      {questions?.map((question) => (
        <TriviaGame
          {...question}
          increment={increment}
          lossLive={lossLive}
        ></TriviaGame>
      ))}
    </div>
  );
}

export default App;
