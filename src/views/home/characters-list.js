import { Pagination } from '@material-ui/lab';
import React from 'react';
import { Link } from 'react-router-dom';
import Character from './character'

const CharactersList= (props) => {

  const { characters, pagination, page, handleChange } = props;
  console.log(props)

  return (
    <>
      {characters.map(character => <Character key={character.id} id={character.id} name={character.name} />)}
      <Pagination count={pagination} page={page} onChange={handleChange}></Pagination>
    </>
  );
}

export default CharactersList;