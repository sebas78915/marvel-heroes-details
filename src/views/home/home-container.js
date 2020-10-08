import React, { useEffect, useState } from 'react';
import API from '../../api-client/API';
import CharactersList from './characters-list';
import queryString from 'query-string'

const HomeContainer = (props) => {
  const parsed = queryString.parse(props.location.search);

  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [page, setPage] = useState(() => {
    return parseInt(parsed.page || 1);
  });

  useEffect(() => {
    const getCharacters = async () => {
      const category = localStorage.getItem('category');
      let getCharacter = await API.characters.getCharacters(category, {offset: page * 20 - 20});
      if (getCharacter.ok) {
        calculatePagination(getCharacter.data.data.total);
        setCharacters(getCharacter.data.data.results);
      }
    }
    getCharacters();
  }, [page])

  const handleChange = (event, value) => {
    const category = localStorage.getItem('category');
    setPage(value);
    props.history.push({
      pathname: `/${category}`,
      search: value ? `?page=${value}` : '?page=1'
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
