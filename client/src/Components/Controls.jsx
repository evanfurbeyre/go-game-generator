import React from 'react';
import {
  withStyles, Toolbar, IconButton, 
} from '@material-ui/core';
import {
  Refresh, Undo, Redo, KeyboardBackspace
} from '@material-ui/icons';

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
})

function Controls({ classes }) {
  return (
    <Toolbar className={classes.bar}>
      <IconButton>
        <KeyboardBackspace className={classes.icons}/>
      </IconButton>
      <IconButton>
        <Undo className={classes.icons}/>
      </IconButton>
      <IconButton>
        <Redo className={classes.icons}/>
      </IconButton>
      <IconButton>
        <Refresh className={classes.icons}/>
      </IconButton>
    </Toolbar>
  )
}

export default withStyles(styles)(Controls);
