import { AxiosHTTP } from './axios-client';

const API = {
  characters: {
    async getCharacters(params = {}) {
      const paramsValues = Object.keys(params);
      let severalParams = ''
      let urlTemp = '';

      if (!Object.keys(params).length) {
        return await AxiosHTTP('v1/public/characters?', 'GET');
      }
      // eslint-disable-next-line array-callback-return
      paramsValues.map((param, index) => {
        let temp2 = `${param}=${Object.values(params)[index]}&`
        severalParams = urlTemp.concat(temp2)
        urlTemp = temp2;
      })
      return await AxiosHTTP(`v1/public/characters?${severalParams}`, 'GET')
    },
    async getCharactersById(id) {
      return await AxiosHTTP(`v1/public/characters/${id}?`, 'GET');
    }
  }
}

export default API;