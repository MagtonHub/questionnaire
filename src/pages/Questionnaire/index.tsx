import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import withWidth from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { queryQuestionnaire } from '@/services/questionnaire';

interface Props {
  width: Breakpoint;
  match: {
    params: {
      id: string;
    };
  };
}

const useStyles = makeStyles(() => ({
  container: {
    minHeight: 'calc(100vh - 64px)',
  },
}));

const Questionnaire = (props: Props) => {
  const { match } = props;
  const [quests, setQuests] = useState<API.QuestionnaireData>();
  const identifier = match.params.id;

  const fetchQuestionnaire = async () => {
    try {
      const questionnaireData: any = await queryQuestionnaire(identifier);
      setQuests(questionnaireData);
    } catch (error) {
      history.push('/error/401');
    }
    return undefined;
  };

  useEffect(() => {
    fetchQuestionnaire();
  }, []);

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
      <Box my={5}>
        {width} | {quests && quests.name}
      </Box>
    </Grid>
  );
};
export default withWidth()(Questionnaire);
