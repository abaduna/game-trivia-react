import { useReducer } from "react";

import { reducerTG } from "../reducer/triviaGame";

function TriviaGame({ preguntas, option ,increment,lossLive}) {
  

  return (
    <>
      <p>{preguntas}</p>
      <p>Cual es estas opciones es la correcta</p>
      <button onClick={()=>increment()}>{option[0]}</button>
      <button onClick={()=>lossLive()}>{option[1]}</button>
      <button onClick={()=>lossLive()}>{option[2]}</button>
    </>
  );
}

export default TriviaGame;
