import React from "react";

import {
  InputGroupContainer,
  FormInputContainer,
  InputLabelContainer,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <InputGroupContainer>
    <FormInputContainer type="text" onChange={handleChange} {...otherProps} />
    {label ? (
      <InputLabelContainer length={otherProps.value.length}>
        {label}
      </InputLabelContainer>
    ) : null}
  </InputGroupContainer>
);

export default FormInput;
