import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '@/assets/svg/Logo';

interface Props {
  breakpoint: string;
}

const useStyles = makeStyles(() => ({
  appBar: {
    boxShadow: 'none',
    paddingTop: 5,
  },
}));

export default (props: Props) => {
  const { breakpoint } = props;
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="transparent" className={classes.appBar}>
      <Toolbar>
        <Grid container spacing={0} direction="column" alignItems="center">
          <Logo width={breakpoint === 'xs' ? 110 : 130} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
