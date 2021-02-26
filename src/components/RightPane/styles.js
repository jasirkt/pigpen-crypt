import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flex: '50%',
  },
  buttonContainer: {
    padding: '30px 60px 10px',
  },
  pigpenKey: {
    fontFamily: 'Pigpen Cipher',
    border: '1px solid black',
    padding: '5px 0px',
    minWidth: '46px',
    marginRight: '5px',
    marginBottom: '5px',
  },
  pigpenTextContainer: {
    padding: '30px 60px 10px',
  },
  pigpenTextInput: {
    fontFamily: 'Pigpen Cipher',
  },
}));

export default useStyles;
