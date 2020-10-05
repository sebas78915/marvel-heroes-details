import { AxiosHTTP } from './axios-client';

const API = {
  characters: {
    async getCharacters() {
      return await AxiosHTTP('v1/public/characters', 'GET');
    },
    async getCharactersById(id) {
      return await AxiosHTTP(`v1/public/characters/${id}`, 'GET');
    }
  }
}

export default API;