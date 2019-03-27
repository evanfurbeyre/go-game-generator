import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  stone: {
    width: '36px',
    height: '36px',
    borderRadius: '18px',
    position: 'absolute',
  },
  black: {
    backgroundColor: '#000',
  },
  white: {
    backgroundColor: '#fff',
  },
})

function Stone({ classes, black, white }) {
  return (
    <div 
      className={`
        ${classes.stone}
        ${black ? classes.black : ''}
        ${white ? classes.white : ''}
      `} 
    />
  )
}

export default withStyles(styles)(Stone);
