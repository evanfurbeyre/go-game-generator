import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import Cell from './Cell';

const styles = () => ({
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 1fr)',
  },
})

const cellData = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
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
        cellData.map((row) => row.map((cell) => {
          return <Cell />
        }))
      }
    </Grid>
  )
}

export default withStyles(styles)(Board);