import React from 'react';
import { Grid, withStyles } from '@material-ui/core';

const styles = () => ({
  cell: {
    backgroundColor: 'tan',
    height: '40px',
    width: '40px',
  },
})

function Cell({ classes }) {
  return (
    <Grid container justify="center" alignItems="center" className={classes.cell}>
      +
    </Grid>
  )
}

export default withStyles(styles)(Cell);
