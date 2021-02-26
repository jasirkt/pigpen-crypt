import React from 'react';
import { Select, MenuItem, TextField, FormControl, InputLabel } from '@material-ui/core';
import useStyles from './styles';

function LeftPane(props) {
  const classes = useStyles();

  const handleTextChange = event => {
    props.onChange(event.target.value);
  }

  const handleVariantChange = event => {
    props.onVariantChange(event.target.value);
  }

  return <div className={classes.root}>
    <FormControl className={classes.typeSelectorContainer}>
        <InputLabel id="pigpen-variant-label">Variant</InputLabel>
        <Select
          labelId="pigpen-variant-label"
          className={classes.typeSelector}
          onChange={handleVariantChange}
          value={props.variant}
          defaultValue={0}
        >
          <MenuItem value={0}>Standard</MenuItem>
          <MenuItem value={1}>Grid,X,Grid,X</MenuItem>
          <MenuItem value={2}>Grid,Grid,Grid</MenuItem>
          <MenuItem value={3}>Alternate (Assasin's Creed)</MenuItem>
        </Select>
      </FormControl>

    <div className={classes.normalTextContainer}>
      <TextField
        variant="outlined"
        value={props.value}
        onChange={handleTextChange}
        multiline
        rows={10}
        fullWidth/>
    </div>
  </div>;
}

export default LeftPane;
