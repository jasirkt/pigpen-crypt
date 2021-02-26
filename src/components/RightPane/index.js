import React from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from './styles';
import {PigpenLetterIcon} from '../Icons';

function RightPane(props) {
  const classes = useStyles();
  const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  const {text, variant} = props;

  const handleKeyPress = letter => {
    props.onTextChange(text + "" + letter);
  }

  return <div className = {classes.root}>


    <div className={classes.buttonContainer}>
      {alphabets.map(alphabet => (
        <Button
          key={alphabet}
          className={classes.pigpenKey}
          onClick={() => handleKeyPress(alphabet)}
          >
            <PigpenLetterIcon alphabet={alphabet} variant={variant} width="50px" height="50px" strokeWidth="2px" />
        </Button>
      ))}
    </div>


    <div className={classes.pigpenTextContainer}>
      {text.split('').map(alphabet => (
        <PigpenLetterIcon alphabet={alphabet} variant={variant} width="25px" height="25px" strokeWidth="1px" />))
      }
    </div>


  </div>;
}

export default RightPane;
