import React, { useReducer } from "react";

const BLK = 'B';
const WHT = 'W';

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE':
      const { row, col } = action.payload;
      let { currentBoard, turn } = state;

      // Set the clicked cell to black or white
      if (currentBoard[row][col] === 0) {
        currentBoard[row][col] = turn === BLK ? BLK : WHT;
        turn = turn === BLK ? WHT : BLK;
      }

      return {
        ...state,
        currentBoard,
        turn,
      };
    case 'SET_BOARD':
      let { board } = action.payload;

      return {
        ...state,
        currentBoard: board,
        prevBoards: [...state.prevBoards, board],
      }
    default:
      throw new Error('hit default resolver...');
  }
};

const emptyBoard = Array(9).fill().map(() => Array(9).fill(0));
const initialState = {
  turn: BLK,
  currentBoard: emptyBoard,
  prevBoards: [],
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