import React, { useEffect, useState } from 'react';
import API from '../../api-client/API';
import Character from './character'


const HomeContainer = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      let getCharacter = await API.characters.getCharacters();
      if (getCharacter.ok) {
        setCharacters(getCharacter.data.data.results);
      }
    }
    getCharacters();
  }, [])
  
  return (
    <div>
      <h1>HOME CONTAINER</h1>
      {characters.map(character => <Character key={character.id} id={character.id} name={character.name} />)}
    </div>
  );
}

export default HomeContainer;
