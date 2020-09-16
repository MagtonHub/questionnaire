import React from 'react';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import Logo from '@/assets/svg/Logo';
import useStyles from './styles';

interface Props {
  breakpoint: string;
}

export default (props: Props) => {
  const { breakpoint } = props;
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="transparent" className={classes.appBar}>
      <Toolbar>
        <Grid container spacing={0} direction="column" alignItems="center">
          <Logo width={breakpoint === 'xs' ? 110 : 130} fillColor="#FFF" />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
