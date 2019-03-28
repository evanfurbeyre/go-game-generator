import React, { useContext, useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import axios from 'axios';
import Cell from './Cell';
import { Context } from '../Context';

const styles = () => ({
  board: {
    display: 'grid',
    width: '100%',
    height: '100%',
    gridTemplateColumns: 'repeat(9, 1fr)',
    backgroundColor: 'tan',
    borderRadius: '6px',
  },
});

function Board({ classes, width }) {
  const { state: {boardFrames, frameIdx }, dispatch } = useContext(Context);
  const board = boardFrames[frameIdx];

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/board',
    }).then(({ data }) => {
      dispatch({
        type: 'SET_BOARD',
        payload: {
          board: data,
        },
      });
    });
  };

  return (
    <div className={classes.board}>
      { board.map((row, i) => row.map((stone, j) => (
        <Cell
          key={`${i}_${j}`}
          row={i}
          col={j}
          stone={stone}
        />
      )))}
    </div>
  )
}

export default withStyles(styles)(Board);