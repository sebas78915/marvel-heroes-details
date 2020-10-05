import Axios from "axios";

const rootServer = 'https://gateway.marvel.com:443';
const apiKey = 'ebf2c8960ffd4493d717c434dd0e0217';

export async function AxiosHTTP(url, method, data=null) {

    return await Axios({
        url: `${rootServer}/${url}apikey=${apiKey}`,
        method,
        data: data
    })
        .then(res => {
            return {
                ok: true,
                data: res.data
            };
        })
        .catch(error => {
            return {
                ok: false,
                error
            };
        })
}