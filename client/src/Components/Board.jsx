import React from 'react';
import { withStyles } from '@material-ui/core';
import axios from 'axios';
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
})

const cellData = [
  [0,1,0,0,0,0,0,0,0],
  [0,-1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
];

const fetchGame = () => {
  axios({
    method: 'GET',
    url: 'http://localhost:3000/board',
  }).then((data) => {
    console.log(data);
  });
};


function Board({ classes, width }) {

  return (
    <div className={classes.board}>
      {
        cellData.map((row, i) => row.map((stone, j) => {
          return <Cell key={`${i}_${j}`} stone={stone}/>
        }))
      }
      <button onClick={fetchGame}>fetch!</button>
    </div>
  )
}

export default withStyles(styles)(Board);