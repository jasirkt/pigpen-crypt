import React from 'react';
import StandardIcons from './standard';
import GridXGridX from './gridxgridx';
import GridGridGrid from './gridgridgrid';
import Alternate from './alternate';


export const PigpenLetterIcon = props => {
  const {alphabet, variant} = props;
  console.log('alphabet is ', alphabet, ' and variant is ', variant)
  try {
    var iconSet;
    if(variant == 0) iconSet = StandardIcons;
    else if (variant == 1) iconSet = GridXGridX;
    else if (variant == 2) iconSet = GridGridGrid;
    else if (variant == 3) iconSet = Alternate;
    else throw new Error("Unknown variant");

    return iconSet[alphabet.toUpperCase()](props);
  } catch (err) {
      return <span style={{minWidth:props.width,minHeight:props.height,display:'inline-block',verticalAlign: 'text-bottom', textAlign: 'center'}}>{props.alphabet}</span>
    }
 }
