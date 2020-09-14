import React, { Fragment } from 'react';
import { withWidth, Box, Button, Slide } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useStyles from './styles';

interface Props {
  breakpoint: string;
  handleStart: () => void;
  quest: API.QuestionnaireData;
}

const Splash = (props: Props) => {
  const { breakpoint, handleStart, quest } = props;
  const classes = useStyles({ breakpoint });
  return (
    <Fragment>
      <Slide in direction="up" mountOnEnter unmountOnExit>
        <div className={classes.welcome}>Fragebogen</div>
      </Slide>
      <Slide in timeout={500} direction="up" mountOnEnter unmountOnExit>
        <div className={classes.name}>{quest.name}</div>
      </Slide>
      <Slide in timeout={700} direction="up" mountOnEnter unmountOnExit>
        <div className={classes.splashWrapper}>{quest.description}</div>
      </Slide>
      <Slide in timeout={900} direction="up" mountOnEnter unmountOnExit>
        <Box my={5} display="flex" justifyContent="center" alignItems="center">
          <Button
            onClick={handleStart}
            variant="contained"
            size="large"
            color="primary"
            className={classes.start}
            endIcon={<ArrowForwardIosIcon />}
          >
            Anfang
          </Button>
        </Box>
      </Slide>
    </Fragment>
  );
};
export default withWidth()(Splash);
