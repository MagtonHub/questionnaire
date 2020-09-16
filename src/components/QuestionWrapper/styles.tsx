import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  headline: {
    fontWeight: 400,
    fontSize: 22,
    color: 'rgba(255,255,255)',
    textAlign: 'center',
    padding: '.75rem 1rem',
  },
  description: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  formControl: {
    margin: theme.spacing(0, 0, 4, 0),
  },
  sub: {
    fontSize: 12,
  },
  nextButton: {
    backgroundColor: '#2B6CDE',
    color: '#FFF',
    borderColor: '#2B6CDE',
    minHeight: '3rem',
    margin: theme.spacing(4, 0, 2, 0),
  },
  required: {
    color: 'red',
    fontWeight: 'bold',
  },
}));

export default useStyles;
