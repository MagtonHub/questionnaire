import React, { useState, Dispatch, SetStateAction } from 'react';
import { RadioGroup, Fade, FormControlLabel } from '@material-ui/core';
import { FormRadio, FormCheckbox } from './styles';

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  choices: any;
  multiple?: boolean;
  setValues: Dispatch<SetStateAction<never[]>>;
  currentIndex: number;
}

const FormRadioGroup = (props: Props) => {
  const [checkedValues, setCheckedValues] = useState({});
  const { handleChange, value, choices, multiple, setValues, currentIndex } = props;

  const handleCheckboxChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const checkedValue = (event.target as HTMLInputElement).value;
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      await setCheckedValues(
        (prevChecked) =>
          ({
            ...prevChecked,
            [index]: checkedValue,
          } as any),
      );
      setValues(
        (prevValues) =>
          ({
            ...prevValues,
            [currentIndex]: checkedValues,
          } as any),
      );
    } else {
      const selectedAnswers = {
        ...checkedValues,
      };
      delete selectedAnswers[index];
      await setCheckedValues(selectedAnswers);
      setValues(
        (prevValues) =>
          ({
            ...prevValues,
            [currentIndex]: checkedValues,
          } as any),
      );
    }
  };

  return (
    <Fade timeout={1000} in>
      <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleChange}>
        {choices.map((choice: any, index: number) => (
          <FormControlLabel
            key={choice.value}
            value={choice.value}
            control={
              multiple ? (
                <FormCheckbox onChange={(e) => handleCheckboxChange(e, index)} />
              ) : (
                <FormRadio />
              )
            }
            label={choice.label}
          />
        ))}
      </RadioGroup>
    </Fade>
  );
};
export default FormRadioGroup;
