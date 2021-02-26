import { withStyles } from '@material-ui/core/styles';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import useStyles from './styles';
import {useState} from 'react';

function App() {
  const classes = useStyles();

  const [text, setText] = useState("A QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");

  const onChange = value => setText(value);

  return (
    <div className="App">
      <header className={classes.header}>
        <h1>Pigpen Crypt</h1>
      </header>
      <div className={classes.content}>
        <LeftPane value={text} onChange={onChange} />
        <RightPane value={text} onChange={onChange} />
      </div>


    </div>
  );
}

export default App;
