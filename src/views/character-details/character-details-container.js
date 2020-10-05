import React, { useEffect, useState } from 'react';
import API from '../../api-client/API';

const CharacterDetailsContainer = ({ match }) => {

  const { id } = match.params
  const [character, setCharacter] = useState('');

  useEffect(() => {
    const getCharacterById = async () => {
      let getCharacter = await API.characters.getCharactersById(id);
      if (getCharacter.ok) {
        setCharacter(getCharacter.data.data.results[0]);
      }
    }
    getCharacterById();
  }, [id])

  if (!character) {
    return <div>Loading..</div>
  }

  return (
    <div>
      <h3>{character.name}</h3>
    </div>
  );
}

export default CharacterDetailsContainer;
