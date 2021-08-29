import React from "react";
import useInputFieldData, {
  checkFieldValidity,
} from "../../helpers/useTextField";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import { grey } from "@material-ui/core/colors";

// import "./InputField.module.css";

const transitionTime = 500;

const useStyles = makeStyles((theme) => ({
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    "& p": {
      fontWeight: 600,
      marginBottom: 5,
      fontSize: 17,
      marginTop: 0,
    },
    width: "100%",
    height: "fit-content",
  },
  input: ({ inputStyles }) => ({
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: grey,
    },
    color: theme.palette.common.black,
    fontSize: 18,
    backgroundColor: theme.palette.common.white,
    ...inputStyles,
  }),
  disabled: {
    color: grey[700] + " !important",
  },
  inputField: ({ textfieldStyles }) => ({
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none",
      boxShadow: "0 0 0 2px black",
      ...textfieldStyles,
    },
  }),
  error: {
    color: theme.palette.error.main,
    fontSize: "15px !important",
    fontWeight: 600,
    margin: "5px 0 0 0 !important",
  },
}));

const InputField = ({
  fieldName,
  values,
  setValues,
  variant,
  errors,
  setErrors,
  disabled,
  dataForField,
  skipValidation,
  hideLabel,
  textfieldStyles,
  inputStyles,
  required,
  cusPlaceholder,
  hideStartIcon,
}) => {
  const {
    label,
    type,
    inputName,
    placeholder,
    StartIcon,
    EndIcon,
    endIconFunction,
    attributes,
  } = useInputFieldData(fieldName, dataForField);

  const classes = useStyles({ textfieldStyles, inputStyles });

  const updateValues = (newValue) => {
    if (!skipValidation)
      setErrors({
        ...errors,
        [inputName]: checkFieldValidity(inputName, newValue, required),
      });
    setValues({ ...values, [inputName]: newValue });
  };

  let error = !errors || skipValidation ? "" : errors[inputName];

  return (
    <div className={`${classes.inputWrapper}`}>
      {!hideLabel && <p>{label}</p>}
      <TextField
        placeholder={cusPlaceholder || placeholder}
        type={type}
        disabled={disabled}
        name={inputName}
        variant={variant}
        {...attributes}
        size="small"
        value={values[inputName] ? values[inputName] : ""}
        classes={{
          root: classes.inputField,
        }}
        onChange={(event) => updateValues(event.target.value)}
        InputProps={{
          classes: {
            root: classes.input,
            disabled: classes.disabled,
          },
          startAdornment:
            StartIcon && !hideStartIcon ? (
              <InputAdornment position="start">
                <StartIcon />
              </InputAdornment>
            ) : null,
          endAdornment: EndIcon ? (
            <InputAdornment position="end">
              <IconButton onClick={endIconFunction}>
                <EndIcon />
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
      />
      <Collapse in={error !== ""} timeout={transitionTime}>
        <p className={classes.error}>
          <i>{error}</i>
        </p>
      </Collapse>
    </div>
  );
};

export default InputField;
