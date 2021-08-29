import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({}));

const Loading = () => {
  return <CircularProgress size={40} />;
};

export default Loading;
