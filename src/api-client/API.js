import { AxiosHTTP } from './axios-client';

const API = {
  characters: {
    async getCharacters(params = {}) {
      const paramsValues = Object.keys(params);
      let severalParams = ''
      let urlTemp = '';

      if (Object.keys(params).length === 0) {
        return await AxiosHTTP('v1/public/characters?', 'GET');
      } else if (Object.keys(params).length === 1) {
        return await AxiosHTTP(`v1/public/characters?${paramsValues[0]}=${Object.values(params)[0]}&`, 'GET')
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