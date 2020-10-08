import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import API from '../../api-client/API';

const CharacterDetailsContainer = ({ match }) => {

  const { id } = match.params
  const [character, setCharacter] = useState('');
  const category = localStorage.getItem('category')

  useEffect(() => {
    const getCharacterById = async () => {
      let getCharacter = await API.characters.getCharactersById(category, id);
      if (getCharacter.ok) {
        setCharacter(getCharacter.data.data.results[0]);
      }
    }
    getCharacterById();
  }, [id, category])

  if (!character) {
    return <CircularProgress color="secondary" />
  }

  return (
    <div>
      <h3>{category === 'characters' ? character.name : character.title}</h3>
    </div>
  );
}

export default CharacterDetailsContainer;
