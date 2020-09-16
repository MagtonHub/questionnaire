import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

interface Props {
  progress: number;
}

const useStyles = makeStyles(() => ({
  appBar: {
    top: 0,
    boxShadow: 'none',
  },
}));

const BorderLinearProgress = withStyles(() =>
  createStyles({
    bar: {
      borderRadius: 3,
      backgroundColor: '#2B6CDE',
    },
  }),
)(LinearProgress);

export default (props: Props) => {
  const classes = useStyles();
  const { progress } = props;
  return (
    <AppBar position="fixed" color="transparent" className={classes.appBar}>
      <BorderLinearProgress variant="determinate" value={progress} />
    </AppBar>
  );
};
