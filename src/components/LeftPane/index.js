import React from 'react';
import { Select, MenuItem, TextField } from '@material-ui/core';
import useStyles from './styles';

function LeftPane(props) {
  const classes = useStyles();

  const onTextChange = event => {
    props.onChange(event.target.value);
  }

  return <div className={classes.root}>

    <div className={classes.normalTextContainer}>
      <TextField
        variant="outlined"
        value={props.value}
        onChange={onTextChange}
        multiline
        rows={10}
        fullWidth/>
    </div>
  </div>;
}

export default LeftPane;
