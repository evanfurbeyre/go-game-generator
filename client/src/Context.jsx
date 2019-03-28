import React, { useReducer } from "react";

// Constants
const BLK = 'B';
const WHT = 'W';

// Initial State
const emptyBoard = () => Array(9).fill().map(() => Array(9).fill(0));
const initialState = {
  turn: BLK,
  currentBoard: emptyBoard(),
};

const reducer = (state, action) => {
  let turn, currentBoard;
  switch (action.type) {
    // Make a move
    case 'MOVE':
      const { row, col } = action.payload;
      ({ currentBoard, turn } = state);

      // Set the clicked cell to black or white
      if (currentBoard[row][col] === 0) {
        currentBoard[row][col] = turn === BLK ? BLK : WHT;
        turn = turn === BLK ? WHT : BLK;
      }

      return { ...state, currentBoard, turn };

    // Set the board
    case 'SET_BOARD':
      ({ board: currentBoard } = action.payload);
      return { ...state, currentBoard };

    // Reset the board
    case 'CLEAR':
      return { ...state, currentBoard: emptyBoard() };

    // TODO: ...
    case 'UNDO':
      return { ...state };
    case 'REDO':
      return { ...state };
    case 'FETCH':
      return { ...state };
    default:
      throw new Error('hit default resolver...');
  }
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