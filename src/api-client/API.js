import { AxiosHTTP } from './axios-client';

const API = {
  characters: {
    async getCharacters(category, params = {}) {
      const paramsValues = Object.keys(params);
      let severalParams = ''
      let urlTemp = '';

      if (!Object.keys(params).length) {
        return await AxiosHTTP(`v1/public/${category}?`, 'GET');
      }
      // eslint-disable-next-line array-callback-return
      paramsValues.map((param, index) => {
        let temp2 = `${param}=${Object.values(params)[index]}&`
        severalParams = urlTemp.concat(temp2)
        urlTemp = temp2;
      })
      return await AxiosHTTP(`v1/public/${category}?${severalParams}`, 'GET')
    },
    async getCharactersById(category, id) {
      return await AxiosHTTP(`v1/public/${category}/${id}?`, 'GET');
    }
  }
}

export default API;