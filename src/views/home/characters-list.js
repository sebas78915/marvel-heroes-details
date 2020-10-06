import { Pagination } from '@material-ui/lab';
import React from 'react';
import Character from './character'
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  display: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing(4)
  },
  pagination: {
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  ul: {
    justifyContent: 'center'
  }
}));

const CharactersList= (props) => {
  const classes = useStyles();

  const { characters, pagination, page, handleChange } = props;

  if (!characters.length) {
    return <CircularProgress color="secondary" />
  }

  return (
    <>
      <div className={classes.display}>
        {characters.map(character => <Character key={character.id} character={character} />)}
      </div>
      <Pagination
        className={classes.pagination}
        variant="outlined"
        color="secondary"
        count={pagination}
        page={page} 
        onChange={handleChange}
        size="large"></Pagination>
    </>
  );
}

export default CharactersList;