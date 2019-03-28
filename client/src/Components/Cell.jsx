import React, { useContext } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import Stone from './Stone';
import { Context } from '../Context';

const LINE_WIDTH = '2px';

const styles = () => ({
  cell: {
    position: 'relative',
  },
  vDiv: {
    position: 'absolute',
    width: LINE_WIDTH,
    height: '100%',
    backgroundColor: '#222',
  },
  hDiv: {
    position: 'absolute',
    width: '100%',
    height: LINE_WIDTH,
    backgroundColor: '#222',
  },
})

function Cell({ classes, stone, row, col }) {
  const { dispatch } = useContext(Context);

  // Make a move
  const handleClick = () => {
    dispatch({
      type: 'MOVE',
      payload: {
        row,
        col,
      },
    });
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.cell}
      onClick={handleClick}
    >
      <div className={classes.vDiv}/>
      <div className={classes.hDiv}/>
      { stone === 'B' && <Stone black /> }
      { stone === 'W' && <Stone white /> }
    </Grid>
  )
}

export default withStyles(styles)(Cell);
