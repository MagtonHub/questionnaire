import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
  breakpoint: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  splashWrapper: {
    maxWidth: 450,
    fontWeight: 200,
    color: 'rgba(32,49,81,.7)',
    textAlign: 'center',
    marginTop: theme.spacing(3),
  },
  welcome: (props: Props) => ({
    fontWeight: 400,
    fontSize: props.breakpoint !== 'xs' ? 54 : 45,
    color: 'rgba(32,49,81,.9)',
    textAlign: 'center',
  }),
  name: (props: Props) => ({
    fontWeight: 400,
    fontSize: props.breakpoint !== 'xs' ? 28 : 18,
    color: 'rgba(32,49,81,.7)',
    textAlign: 'center',
    padding: '.75rem 1rem',
  }),
  start: {
    backgroundColor: '#2B6CDE',
    color: '#FFF',
    borderColor: '#2B6CDE',
    minHeight: '3rem',
    margin: theme.spacing(1),
  },
}));

export default useStyles;
