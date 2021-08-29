import { useEffect, useState } from "react";
import { textFieldKeys } from "./utils";

//ICONS
import SearchIcon from "@material-ui/icons/Search";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

const inputData = {
  [textFieldKeys.SEARCH]: {
    label: "Search",
    type: "text",
    placeholder: "Search for....",
    StartIcon: SearchIcon,
  },
};

export const checkFieldValidity = (inputName, value, required) => {
  let newError = "";
  value = value ? value : "";

  if (
    inputName === "email" &&
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value.toLowerCase()
    ) === false
  )
    newError = "Email not valid!";
  else if (
    inputName === "phone" &&
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
      value
    ) === false
  )
    newError = "Phone number not valid!";
  else if (value === "" && required) newError = "This field cannot be empty!";

  return newError;
};

const useInputFieldData = (fieldName, data) => {
  const [showPassword, setShowPassword] = useState(false);
  const [fieldData, setFieldData] = useState(
    typeof inputData[fieldName] === "function"
      ? inputData[fieldName](data)
      : inputData[fieldName]
  );

  useEffect(() => {
    if (inputData[fieldName].type === "password") {
      let newFieldData = {
        ...fieldData,
        EndIcon: showPassword ? VisibilityIcon : VisibilityOffIcon,
        type: showPassword ? "text" : "password",
        ["endIconFunction"]: () => setShowPassword(!showPassword),
      };

      setFieldData({ ...newFieldData });
    }
  }, [showPassword]);

  useEffect(() => {
    if (inputData[fieldName].type !== "password")
      setFieldData(
        typeof inputData[fieldName] === "function"
          ? inputData[fieldName](data)
          : inputData[fieldName]
      );
  }, [fieldName]);

  return fieldData;
};

export default useInputFieldData;
