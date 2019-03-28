import React, { useReducer } from "react";

// Constants
const BLK = 'B';
const WHT = 'W';

// Initial State
const emptyBoard = () => Array(9).fill().map(() => Array(9).fill(0));
const initialState = {
  turn: BLK,
  frameIdx: 0,
  boardFrames: [emptyBoard()],
};

const reducer = (state, action) => {
  let { turn, boardFrames, frameIdx }= state;
  let board, row, col;
  if (action.payload) {
     ({ board, row, col } = action.payload);
  }

  switch (action.type) {
    // Make a move
    case 'MOVE':
      // Copy current(aka previous board) to new frame, update frame ptr
      boardFrames.push(
        JSON.parse(JSON.stringify(boardFrames[frameIdx]))
      );
      frameIdx += 1;

      // Set the clicked cell to black or white
      if (boardFrames[frameIdx][row][col] === 0) {
        boardFrames[frameIdx][row][col] = turn === BLK ? BLK : WHT;
        turn = turn === BLK ? WHT : BLK;
      }

      return { ...state, boardFrames, frameIdx, turn };

    // Set the board
    case 'SET_BOARD':
      return { ...state, boardFrames: [board] };

    // Reset the board
    case 'CLEAR':
      return { ...state, boardFrames: [emptyBoard()], frameIdx: 0 };

    // Back a move
    case 'UNDO':
      if (frameIdx > 0) frameIdx -= 1;
      return { ...state, frameIdx };

    // Forward a move
    case 'REDO':
      if (frameIdx < boardFrames.length - 1) frameIdx += 1;
      return { ...state, frameIdx };

    // TODO
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