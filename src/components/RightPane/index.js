import React from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from './styles';

function RightPane(props) {
  const classes = useStyles();
  return <div className = {classes.root}>
    <div className={classes.buttonContainer}>
      <Button className={classes.pigpenKey}>A</Button>
      <Button className={classes.pigpenKey}>B</Button>
      <Button className={classes.pigpenKey}>C</Button>
      <Button className={classes.pigpenKey}>D</Button>
      <Button className={classes.pigpenKey}>E</Button>
      <Button className={classes.pigpenKey}>F</Button>
      <Button className={classes.pigpenKey}>G</Button>
      <Button className={classes.pigpenKey}>H</Button>
      <Button className={classes.pigpenKey}>I</Button>
      <Button className={classes.pigpenKey}>J</Button>
      <Button className={classes.pigpenKey}>K</Button>
      <Button className={classes.pigpenKey}>L</Button>
      <Button className={classes.pigpenKey}>M</Button>
      <Button className={classes.pigpenKey}>N</Button>
      <Button className={classes.pigpenKey}>O</Button>
      <Button className={classes.pigpenKey}>P</Button>
      <Button className={classes.pigpenKey}>Q</Button>
      <Button className={classes.pigpenKey}>R</Button>
      <Button className={classes.pigpenKey}>S</Button>
      <Button className={classes.pigpenKey}>T</Button>
      <Button className={classes.pigpenKey}>U</Button>
      <Button className={classes.pigpenKey}>V</Button>
      <Button className={classes.pigpenKey}>W</Button>
      <Button className={classes.pigpenKey}>X</Button>
      <Button className={classes.pigpenKey}>Y</Button>
      <Button className={classes.pigpenKey}>Z</Button>
    </div>
    <div className={classes.pigpenTextContainer}>
      <TextField
        className={classes.pigpenText}
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
        InputProps={{
            classes: {
              input: classes.pigpenTextInput,
            },
          }}
        fullWidth/>
    </div>
  </div>;
}

export default RightPane;
