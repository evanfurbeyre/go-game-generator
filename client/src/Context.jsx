import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'move':
      return {
        ...state,
        turn: state.turn ? 0 : 1, // 0 = black, 1 = white
      };
    default:
      return;
  }
};

const initialState = {
  turn: 0,
  currentBoard: null,
  prevBoards: null,
};

const Context = React.createContext(initialState);

function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}
export { Context, Provider };