import { Pagination } from '@material-ui/lab';
import React from 'react';
import Character from './character'
import { CircularProgress, makeStyles, Slide } from '@material-ui/core';
import Theme from '../../utils/theme';

const useStyles = makeStyles((theme) => ({
  title: {
    position: "absolute",
    backgroundColor: 'red',
    color: 'white',
    width: 'fit-content',
    margin: '20px 0',
    zIndex: 1,
    borderRadius: '0 5px 5px 0',
    padding: '0 100px',
    fontStyle: 'italic',
  },
  display: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing(4)
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(5),
  }
}));

const CharactersList= (props) => {
  const classes = useStyles();

  const { characters, pagination, page, handleChange } = props;

  if (!characters.length) {
    return <CircularProgress color="primary" />
  }

  return (
    <>
      <Slide timeout={800} direction="right" in mountOnEnter unmountOnExit><div className={classes.title}><h1>CHARACTERS</h1></div></Slide>
      <div className={classes.display}>
        {characters.map(character => <Character key={character.id} character={character} />)}
        {characters.map((character, index) => <Character shadow key={character.id} character={character} index={index} />)}
      </div>
      <Theme>
        <Pagination
          className={classes.pagination}
          variant="outlined"
          count={pagination}
          page={page} 
          onChange={handleChange}
          size="large"
          boundaryCount={2}></Pagination>
      </Theme>
    </>
  );
}

export default CharactersList;