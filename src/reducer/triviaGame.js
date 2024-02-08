const initialState = {
  puntos: 0,
  vidas: 3,
};

export const reducerTG = (state = initialState, action = {}) => {
  if (action.type === "INCREMENT") {
    console.log(state.puntos);
    return { ...state, puntos: state.puntos + 10 };
  }
  if (action.type == "LOSSLIVE") {
    return { ...state, vidas: state.vidas - 1 };
  }
  return state;
};
