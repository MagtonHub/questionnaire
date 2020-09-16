import React, { Fragment, useEffect, useState, KeyboardEvent } from 'react';
import { history } from 'umi';
import { CircularProgress, MobileStepper, Button, Grid, Box, withWidth } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';
import QuestionWrapper from '@/components/QuestionWrapper';
import { queryQuestionnaire } from '@/services/questionnaire';
import Progress from '@/components/Progress';
import Splash from '@/components/Splash';
import useStyles from './styles';

interface Props {
  width: Breakpoint;
  match: {
    params: {
      id: string;
    };
  };
}

const Questionnaire = (props: Props) => {
  const { match } = props;
  const [quest, setQuest] = useState<API.QuestionnaireData>();
  const [started, setStarted] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [buttonVisible, setButtonVisible] = useState(false);
  const identifier = match.params.id;
  const fetchQuestionnaire = async () => {
    try {
      const questionnaireData: any = await queryQuestionnaire(identifier);
      setQuest(questionnaireData);
    } catch (error) {
      history.push('/error/401');
    }
    return undefined;
  };

  const progressPercent = (partialValue: number) => {
    if (quest && quest.questions) {
      return (100 * partialValue) / quest.questions.length;
    }
    return 0;
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      setStarted(true);
    }
  };

  const handleStart = () => {
    setStarted(true);
  };

  useEffect(() => {
    fetchQuestionnaire();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setCurrentIndex((prevActiveStep) => prevActiveStep - 1);
  };

  const { width } = props;
  const classes = useStyles();
  const totalSteps = quest && quest.questions ? quest.questions.length : 0;
  return (
    <Fragment>
      <Grid
        tabIndex={-1}
        onKeyDown={handleKeyPress}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        {quest ? (
          <Box my={5}>
            {started ? (
              <QuestionWrapper
                quest={quest}
                setCurrentIndex={setCurrentIndex}
                currentIndex={currentIndex}
                setButtonVisible={setButtonVisible}
                buttonVisible={buttonVisible}
              />
            ) : (
              <Splash handleStart={handleStart} quest={quest} breakpoint={width} />
            )}
          </Box>
        ) : (
          <CircularProgress />
        )}
        {started && <Progress progress={progressPercent(currentIndex + 1)} />}
      </Grid>
      <div className={classes.fab}>
        {started && (
          <MobileStepper
            steps={totalSteps}
            position="static"
            variant="text"
            activeStep={currentIndex}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={
                  currentIndex === totalSteps - 1 ||
                  (!buttonVisible &&
                    quest &&
                    quest.questions &&
                    quest.questions[currentIndex].required)
                }
              >
                <KeyboardArrowDown />
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={currentIndex === 0}>
                <KeyboardArrowUp />
              </Button>
            }
          />
        )}
      </div>
    </Fragment>
  );
};
export default withWidth()(Questionnaire);
