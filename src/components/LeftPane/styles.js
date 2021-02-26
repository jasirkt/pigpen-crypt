import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    borderRight: '1px solid black',
    flex: '50%',
  },
  // typeSelectorContainer: {
  //   display: 'flex',
  //   flexBasis: '100%',
  // },
  normalTextContainer: {
    padding: '30px 60px 10px',
  },
}));

export default useStyles;
