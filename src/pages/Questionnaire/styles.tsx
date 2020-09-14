import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: 'calc(100vh -  140px)',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
