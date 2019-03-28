import React, { useContext } from 'react';
import {
  withStyles, Toolbar, IconButton, 
} from '@material-ui/core';
import {
  Refresh, Undo, Redo, KeyboardBackspace
} from '@material-ui/icons';
import { Context } from '../Context';

const styles = () => ({
  bar: {
    marginTop: '10px',
    backgroundColor: '#005e9c',
    width: '100%',
    padding: '0',
    borderRadius: '6px',
    justifyContent: 'space-around'
  },
  icons: {
    color: '#fff',
  },
});

function Controls({ classes }) {
  const { dispatch } = useContext(Context);

  return (
    <Toolbar className={classes.bar}>
      <IconButton onClick={() => dispatch({ type: 'CLEAR' })}>
        <KeyboardBackspace className={classes.icons} />
      </IconButton>
      <IconButton onClick={() => dispatch({ type: 'UNDO' })}>
        <Undo className={classes.icons} />
      </IconButton>
      <IconButton onClick={() => dispatch({ type: 'REDO' })}>
        <Redo className={classes.icons} />
      </IconButton>
      <IconButton onClick={() => dispatch({ type: 'FETCH' })}>
        <Refresh className={classes.icons} />
      </IconButton>
    </Toolbar>
  )
}

export default withStyles(styles)(Controls);
