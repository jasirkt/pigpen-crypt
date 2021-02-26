import React from 'react';

const alphabetA = props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
        <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
        <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
    </svg>

const alphabetB = props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
       <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
       <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
       <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
    </svg>

const alphabetC= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
       <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
       <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
    </svg>

const alphabetD= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
        <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
        <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
        <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
       </svg>

const alphabetE= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
         <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
         <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
         <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
         <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
    </svg>

const alphabetF= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
          <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
          <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
          <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
     </svg>

const alphabetG= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
         <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
         <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
    </svg>

const alphabetH= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
        <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
        <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
        <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
   </svg>

const alphabetI= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
       <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
       <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
  </svg>


const alphabetJ = props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
        <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
        <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
       <circle r={props.strokeWidth} cx="50%" cy="50%" />
    </svg>

const alphabetK = props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
       <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
       <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
       <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
      <circle r={props.strokeWidth} cx="50%" cy="50%" />
    </svg>

const alphabetL= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
       <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
       <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
      <circle r={props.strokeWidth} cx="50%" cy="50%" />
    </svg>

const alphabetM= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
    <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
    <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
    <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
    <circle r={props.strokeWidth} cx="50%" cy="50%" />
  </svg>

const alphabetN= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
     <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
     <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
     <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
     <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
    <circle r={props.strokeWidth} cx="50%" cy="50%" />
</svg>

const alphabetO= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
        <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
        <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
        <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
       <circle r={props.strokeWidth} cx="50%" cy="50%" />
   </svg>

const alphabetP= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
       <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
       <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
      <circle r={props.strokeWidth} cx="50%" cy="50%" />
  </svg>

const alphabetQ= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
      <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
      <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
      <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
     <circle r={props.strokeWidth} cx="50%" cy="50%" />
 </svg>

const alphabetR= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
       <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
       <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
      <circle r={props.strokeWidth} cx="50%" cy="50%" />
  </svg>

const alphabetS= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
      <line x1="20%" y1="20%" x2="50%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
      <line x1="80%" y1="20%" x2="50%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
 </svg>

const alphabetT= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
     <line x1="20%" y1="20%" x2="80%" y2="50%" stroke="black" stroke-width={props.strokeWidth} />
     <line x1="20%" y1="80%" x2="80%" y2="50%" stroke="black" stroke-width={props.strokeWidth} />
</svg>

const alphabetU= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
    <line x1="80%" y1="20%" x2="20%" y2="50%" stroke="black" stroke-width={props.strokeWidth} />
    <line x1="80%" y1="80%" x2="20%" y2="50%" stroke="black" stroke-width={props.strokeWidth} />
</svg>

 const alphabetV= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
     <line x1="20%" y1="80%" x2="50%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
     <line x1="80%" y1="80%" x2="50%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
 </svg>

const alphabetW= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
     <line x1="20%" y1="20%" x2="50%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
     <line x1="80%" y1="20%" x2="50%" y2="80%" stroke="black" stroke-width={props.strokeWidth} />
     <circle r={props.strokeWidth} cx="50%" cy="50%" />
</svg>

const alphabetX= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
    <line x1="20%" y1="20%" x2="80%" y2="50%" stroke="black" stroke-width={props.strokeWidth} />
    <line x1="20%" y1="80%" x2="80%" y2="50%" stroke="black" stroke-width={props.strokeWidth} />
    <circle r={props.strokeWidth} cx="50%" cy="50%" />
</svg>

const alphabetY= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
   <line x1="80%" y1="20%" x2="20%" y2="50%" stroke="black" stroke-width={props.strokeWidth} />
   <line x1="80%" y1="80%" x2="20%" y2="50%" stroke="black" stroke-width={props.strokeWidth} />
   <circle r={props.strokeWidth} cx="50%" cy="50%" />
</svg>

const alphabetZ= props => <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
<line x1="20%" y1="80%" x2="50%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
<line x1="80%" y1="80%" x2="50%" y2="20%" stroke="black" stroke-width={props.strokeWidth} />
<circle r={props.strokeWidth} cx="50%" cy="50%" />
</svg>


export const PigpenLetterIcon = props => {
  try {
    const svgg = eval(`alphabet${props.alphabet.toUpperCase()}`)(props);
    return svgg;
  } catch (err) {
      return <span style={{minWidth:props.width,minHeight:props.height,display:'inline-block',verticalAlign: 'text-bottom', textAlign: 'center'}}>{props.alphabet}</span>
    }
 }
