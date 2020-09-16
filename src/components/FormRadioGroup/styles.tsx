import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

const FormRadio = withStyles({
  root: {
    color: '#FFF',
    '&$checked': {
      color: '#F99400',
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

const FormCheckbox = withStyles({
  root: {
    color: '#FFF',
    '&$checked': {
      color: '#F99400',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export { FormRadio, FormCheckbox };
