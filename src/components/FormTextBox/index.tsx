import React from 'react';
import Fade from '@material-ui/core/Fade';
import CustomTextField from './styles';

interface Props {
  multiline: boolean;
  required?: boolean;
}

const FormTextBox = (props: Props) => {
  const { multiline, required } = props;

  return (
    <Fade timeout={1000} in>
      <CustomTextField
        size="medium"
        placeholder="Geben Sie hier Ihre Antwort ein..."
        autoFocus
        fullWidth
        required={required}
        multiline={multiline}
        rows={multiline ? 4 : 1}
      />
    </Fade>
  );
};

export default FormTextBox;
