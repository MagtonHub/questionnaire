import React, { Fragment, useEffect, useState, KeyboardEvent } from 'react';
import { history } from 'umi';
import withWidth from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import QuestionnaireForm from '@/components/QuestionnaireForm';
import Progress from '@/components/Progress';
import { queryQuestionnaire } from '@/services/questionnaire';
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

  const { width } = props;
  const classes = useStyles();
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
              <QuestionnaireForm quest={quest} />
            ) : (
              <Splash handleStart={handleStart} quest={quest} breakpoint={width} />
            )}
          </Box>
        ) : (
          <CircularProgress />
        )}
        <Progress breakpoint={width} progress={progressPercent(2.5)} />
      </Grid>
    </Fragment>
  );
};
export default withWidth()(Questionnaire);
