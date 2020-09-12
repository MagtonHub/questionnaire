import React from 'react';
import withWidth from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  width: Breakpoint;
}

const useStyles = makeStyles(() => ({
  container: {
    minHeight: 'calc(100vh - 64px)',
  },
}));

function Questionnaire(props: Props) {
  const classes = useStyles();

  const { width } = props;
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      <Box my={5}>{width}</Box>
    </Grid>
  );
}
export default withWidth()(Questionnaire);
