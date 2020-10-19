import { CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <CircularProgress size={70} color="primary" />
    </div>
  )
}

export default Loader;