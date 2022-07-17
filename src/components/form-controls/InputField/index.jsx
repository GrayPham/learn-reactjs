import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  lable: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, lable, disabled } = props;
  const { errors, formState } = form;
  const hasError = errors[name] && formState.touched[name];
  console.log(errors[name], formState.touched[name]);
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      fullWidth
      label={lable}
      disabled={disabled}
      error={!!hasError}
      helperText={errors[name]?.message}
    />
  );
}

export default InputField;
