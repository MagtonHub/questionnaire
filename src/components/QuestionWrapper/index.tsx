import React, { useState, Dispatch } from 'react';
import { FormControl, Button, Zoom, Box } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SendIcon from '@material-ui/icons/Send';
import FormRadioGroup from '../FormRadioGroup';
import FormTextBox from '../FormTextBox';
import useStyles from './styles';

interface Props {
  quest: API.QuestionnaireData;
  currentIndex: number;
  setCurrentIndex: Dispatch<React.SetStateAction<number>>;
  buttonVisible: boolean;
  setButtonVisible: Dispatch<React.SetStateAction<boolean>>;
}

const QuestionWrapper = (props: Props) => {
  const { quest, currentIndex, setCurrentIndex, buttonVisible, setButtonVisible } = props;
  const classes = useStyles();
  const [values, setValues] = useState([]);
  const [error, setError] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = (event.target as HTMLInputElement).value;
    const question = quest && quest.questions && quest.questions[currentIndex];
    const questions = quest && quest.questions;
    const hasJumps = question && question.jumps && question.jumps.length > 0;
    setValues(
      (prevValues) =>
        ({
          ...prevValues,
          [currentIndex]: eventValue,
        } as any),
    );
    if (eventValue) {
      setButtonVisible(true);
    }
    questions.map((q: any, index: number) => {
      if (hasJumps) {
        return question.jumps.map((jump: any) => {
          return jump.conditions.map((condition: any) => {
            if (
              condition.value.toLowerCase() === eventValue.toLowerCase() &&
              q.identifier === jump.destination.id
            ) {
              return setCurrentIndex(index);
            }
            return false;
          });
        });
      }
      return false;
    });
    setError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (values[0] === 'best') {
      setError(false);
    }
  };

  const handleNext = (index: number) => {
    setCurrentIndex(index + 1);
    setButtonVisible(false);
  };

  const formType = (
    type: string,
    choices?: any,
    multiline?: string,
    required?: boolean,
    multiple?: boolean,
  ) => {
    switch (type) {
      case 'multiple-choice':
        return (
          <FormRadioGroup
            handleChange={handleRadioChange}
            value={values[currentIndex] || ''}
            choices={choices}
            multiple={multiple}
            currentIndex={currentIndex}
            setValues={setValues}
          />
        );
      case 'text':
        return <FormTextBox multiline={multiline === 'true'} required={required} />;
      default:
        return null;
    }
  };
  const totalSteps = (quest && quest.questions && quest.questions.length) || 0;

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        {quest &&
          quest.questions &&
          quest.questions.map((question: any, index: number) => {
            if (index === currentIndex) {
              return (
                <Box
                  key={question.identifier}
                  my={5}
                  flexDirection="column"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Zoom in>
                    <p className={classes.headline}>
                      <span className={classes.sub}>{index + 1}. </span>
                      {question.headline}
                      {question.required && <span className={classes.required}> *</span>}
                    </p>
                  </Zoom>
                  <Zoom in timeout={500}>
                    <p className={classes.description}>{question.description}</p>
                  </Zoom>
                  {formType(
                    question.question_type,
                    question.choices,
                    question.multiline,
                    question.required,
                    question.multiple === 'true',
                  )}
                  {(buttonVisible || !question.required) && currentIndex !== totalSteps - 1 && (
                    <Button
                      type="submit"
                      size="large"
                      variant="contained"
                      color="primary"
                      className={classes.nextButton}
                      endIcon={<ArrowForwardIosIcon />}
                      onClick={() => handleNext(index)}
                    >
                      {question.required || values[currentIndex] ? 'Next' : 'Skip'}
                    </Button>
                  )}
                  {currentIndex === totalSteps - 1 && (
                    <Button
                      type="submit"
                      size="large"
                      variant="contained"
                      color="primary"
                      className={classes.nextButton}
                      endIcon={<SendIcon />}
                    >
                      Submit
                    </Button>
                  )}
                </Box>
              );
            }
            return null;
          })}
      </FormControl>
    </form>
  );
};
export default QuestionWrapper;
