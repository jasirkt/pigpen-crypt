import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    borderLeft: '1px solid black',
  },
  buttonContainer: {
    padding: '30px 60px 10px',
  },
  pigpenKey: {
    border: '1px solid black',
    padding: '5px 0px',
    minWidth: '46px',
    marginRight: '5px',
    marginBottom: '5px',
  },
  pigpenTextContainer: {
    padding: '30px 60px 10px',
  },
}));

export default useStyles;
