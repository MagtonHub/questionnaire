import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: 'calc(100vh - 64px)',
  },
}));

const UnauthorizedPage: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      401 Unauthorized!
    </Grid>
  );
};

export default UnauthorizedPage;
