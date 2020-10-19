import React, { useEffect, useState } from 'react';
import API from '../../api-client/API';
import CharactersList from './characters-list';
import queryString from 'query-string'
import { TextField } from '@material-ui/core';

const HomeContainer = (props) => {
  const parsed = queryString.parse(props.location.search);
  const category = localStorage.getItem('category');

  const [characters, setCharacters] = useState([]);

  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState(0);
  const [page, setPage] = useState(() => {
    return parseInt(parsed.page || 1);
  });

  useEffect(() => {
    const getCharacters = async () => {
      let getCharacter = await API.characters.getCharacters(category, {offset: page * 18 - 18, limit: 18});
      if (getCharacter.ok) {
        calculatePagination(getCharacter.data.data.total);
        setCharacters(getCharacter.data.data.results);
      }
    }
    getCharacters();
  }, [page, category])

  const handleChange = (event, value) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    const category = localStorage.getItem('category');
    setPage(value);
    props.history.push({
      pathname: `/${category}`,
      search: value ? `?page=${value}` : '?page=1'
    });
    
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'auto', block: 'center' });
      setCharacters([]);
    }
  };

  const calculatePagination = (totalHeroes) => {
    setPagination(Math.round(totalHeroes / 18));
  }

  const getCharactersBySearch = async (search) => {
    let searchParam = {};
    if(category === 'characters') {
      searchParam = {nameStartsWith: search}
    } else {
      searchParam = {titleStartsWith: search}
    }
    let getCharacter = await API.characters.getCharacters(category, search && searchParam);
      if (getCharacter.ok) {
        calculatePagination(getCharacter.data.data.total);
        setCharacters(getCharacter.data.data.results);
      }
  }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    getCharactersBySearch(search);
  }  
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChangeSearch} />{search}
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
