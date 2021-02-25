import React from 'react';
import { Select, MenuItem, TextField } from '@material-ui/core';
import useStyles from './styles';

function LeftPane(props) {
  const classes = useStyles();
  return <div class={classes.root}>
    <div className = {classes.typeSelectorContainer}>
      <Select className={classes.typeSelector}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>

    
    <TextField variant="outlined"/>
  </div>;
}

export default LeftPane;
