import React, { Dispatch, SetStateAction } from 'react';
import { RadioGroup, Fade, FormControlLabel } from '@material-ui/core';
import { FormRadio, FormCheckbox } from './styles';

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  choices: any;
  multiple?: boolean;
  setCheckedValues: Dispatch<SetStateAction<{}>>;
  checkedValues: any;
}

const FormRadioGroup = (props: Props) => {
  const { handleChange, value, choices, multiple, setCheckedValues, checkedValues } = props;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const checkedValue = (event.target as HTMLInputElement).value;
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      setCheckedValues(
        (prevChecked) =>
          ({
            ...prevChecked,
            [index]: checkedValue,
          } as any),
      );
    } else {
      const selectedAnswers = {
        ...checkedValues,
      };
      delete selectedAnswers[index];
      setCheckedValues(selectedAnswers);
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
                <FormCheckbox
                  checked={checkedValues[index]}
                  onChange={(e) => handleCheckboxChange(e, index)}
                />
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
