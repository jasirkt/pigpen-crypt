import { withStyles } from '@material-ui/core/styles';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className={classes.header}>
        <h1>Pigpen Crypt</h1>
      </header>
      <div className={classes.content}>
        <LeftPane />
        <RightPane />
      </div>


    </div>
  );
}

export default App;
