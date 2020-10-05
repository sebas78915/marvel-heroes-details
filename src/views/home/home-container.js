import React, { useEffect, useState } from 'react';
import API from '../../api-client/API';
import CharactersList from './characters-list';

const HomeContainer = (props) => {
  const queryString = require('query-string');
  const parsed = queryString.parse(props.location.search);

  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [page, setPage] = React.useState(() => {
    console.log(parsed)
    return parseInt(parsed.page || 1);
  });

  useEffect(() => {
    const getCharacters = async () => {
      let getCharacter = await API.characters.getCharacters({offset: page * 20 - 20});
      if (getCharacter.ok) {
        calculatePagination(getCharacter.data.data.total);
        setCharacters(getCharacter.data.data.results);
      }
    }
    getCharacters();
  }, [page])

  const handleChange = (event, value) => {
    setPage(value);
    props.history.push({
      pathname: '/',
      search: `?page=${page + 1}`
    });
  };

  const calculatePagination = (totalHeroes) => {
    setPagination(Math.round(totalHeroes / 20));
  }
  
  return (
    <div>
      <CharactersList
        {...props}
        characters={characters}
        pagination={pagination}
        page={page}
        handleChange={handleChange}  />
    </div>
  );
}

export default HomeContainer;
