import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

const CustomTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: '#FFF',
    },
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FFF',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255,255,255,.7)',
      },
    },
    '& .MuiInputBase-input:invalid': {
      color: '#FFF',
    },
  },
})((props: TextFieldProps) => <TextField {...props} />);

export default CustomTextField;
