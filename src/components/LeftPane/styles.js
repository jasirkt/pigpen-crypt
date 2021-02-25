import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#c1c1c1',
    flex: '50%',
  },
  typeSelectorContainer: {
    display: 'flex',
    flexBasis: '100%',
  },
}));

export default useStyles;
