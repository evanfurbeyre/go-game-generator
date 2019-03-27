import React, { useState, useEffect, useContext } from 'react';
import { withStyles } from '@material-ui/core';
import axios from 'axios';
import { Context } from '../Context';
import Cell from './Cell';

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

const defaultArray = Array(9).fill().map(() => Array(9).fill(0));

function Board({ classes, width }) {
  const [cellData, setCellData] = useState(defaultArray);
  const { state, dispatch } = useContext(Context);
  console.log('state.turn:', state.turn);


  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/board',
    }).then(({ data }) => {
      console.log('data:', data);
      setCellData(data);
    });
  };

  return (
    <div className={classes.board}>
      {
        cellData.map((row, i) => row.map((stone, j) => {
          return (
            <Cell
              key={`${i}_${j}`}
              stone={stone}
            />
          );
        }))
      }
    </div>
  )
}

export default withStyles(styles)(Board);