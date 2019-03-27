import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import Stone from './Stone';

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

function Cell({ classes, stone }) {
  return (
    <Grid container justify="center" alignItems="center" className={classes.cell}>
      <div className={classes.vDiv}/>
      <div className={classes.hDiv}/>
      { stone === 1 && <Stone black /> }
      {stone === -1 && <Stone white /> }
    </Grid>
  )
}

export default withStyles(styles)(Cell);
