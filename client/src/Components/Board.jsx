import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import Cell from './Cell';

const styles = () => ({
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 1fr)',
    border: '2px solid #222',
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
]


function Board({ classes }) {

  return (
    <Grid className={classes.board}>
      {
        cellData.map((row) => row.map((stone) => {
          return <Cell stone={stone}/>
        }))
      }
    </Grid>
  )
}

export default withStyles(styles)(Board);