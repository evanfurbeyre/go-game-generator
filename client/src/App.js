import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import Board  from './Components/Board';
import Controls  from './Components/Controls';

const BOARD_WIDTH = '500px';

const styles = () => ({
  boardContainer: {
    width: BOARD_WIDTH,
    height: BOARD_WIDTH,
  },
  controlsContainer: {
    width: BOARD_WIDTH,
  },
  background: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#449cd0'
  },
  centerCol: {
    width: BOARD_WIDTH,
  }
})

function App ({ classes }) {
  return (
    <Grid container justify="center" alignItems="center" className={classes.background}>
      <Grid container justify="center" direction="column" className={classes.centerCol}>
        <div className={classes.boardContainer}>
          <Board />
        </div>
        <div className={classes.controlsContainer}>
          <Controls />
        </div>
      </Grid>
    </Grid>
  );
};


export default withStyles(styles)(App);
