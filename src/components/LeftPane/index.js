import React from 'react';
import { Select, MenuItem, TextField } from '@material-ui/core';
import useStyles from './styles';

function LeftPane(props) {
  const classes = useStyles();
  return <div className={classes.root}>

    <div className={classes.normalTextContainer}>
      <TextField
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
        fullWidth/>
    </div>
  </div>;
}

export default LeftPane;
