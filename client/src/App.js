import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import Board  from './Components/Board';

const styles = () => ({
  app: {
    width: '100vw',
    height: '100vh',
  },
})

function App ({ classes }) {
  return (
    <Grid container justify="center" alignItems="center" className={classes.app}>
      <Board />
    </Grid>
  );
};


export default withStyles(styles)(App);
