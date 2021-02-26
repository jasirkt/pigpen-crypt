import { withStyles } from '@material-ui/core/styles';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import Header from './components/Header';
import useStyles from './styles';
import {useState} from 'react';
import { Grid } from '@material-ui/core';

function App() {
  const classes = useStyles();

  const [text, setText] = useState("A QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");

  const onChange = value => setText(value);

  return (
    <div className="App">
      <Header />
      <Grid container>
         <Grid item xs={6}>
           <LeftPane value={text} onChange={onChange} />
         </Grid>
         <Grid item xs={6}>
           <RightPane value={text} onChange={onChange} />
         </Grid>
      </Grid>
      <div className={classes.content}>
      </div>


    </div>
  );
}

export default App;
