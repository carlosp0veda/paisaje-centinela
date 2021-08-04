import React from "react";
import { useField } from "react-final-form";

function Input(props) {
  const {
    input,
    // eslint-disable-next-line 
    meta: { error, touched, submitError },
  } = useField(props.name, {
    initialValue: props.initialValue,
    validate: props.validator,
  });

  const inputProps = {
    ...props,
    ...input,
  };

  return <input {...inputProps} />;
}

export default Input;
