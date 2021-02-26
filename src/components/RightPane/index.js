import React from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from './styles';
import {PigpenLetterIcon} from '../Icons';

function RightPane(props) {
  const classes = useStyles();
  const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  const onTextChange = event => {
    props.onChange(event.target.value);
  }

  const onButtonPress = letter => {
    props.onChange(props.value + "" + letter);
  }

  return <div className = {classes.root}>
    <div className={classes.buttonContainer}>
      {alphabets.map(alphabet => (
        <Button
          key={alphabet}
          className={classes.pigpenKey}
          onClick={() => onButtonPress(alphabet)}
          >
            <PigpenLetterIcon alphabet={alphabet} width="50px" height="50px" strokeWidth="2px" />
        </Button>
      ))}
    </div>
    <div className={classes.pigpenTextContainer}>
      {props.value.split('').map(alphabet => (
        <PigpenLetterIcon alphabet={alphabet} width="25px" height="25px" strokeWidth="1px" />))
      }
    </div>
  </div>;
}

export default RightPane;
