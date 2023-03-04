const { default: axios } = require("axios");
const base64 = require('base-64');

const solicitarToken = async () => {

    const token = process.env.CLIENT_ID + ':' + process.env.SECRET_KEY;

    const headers = {
        Authorization: `Basic ${base64.encode(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    return axios.post(
        process.env.URL_API_LOGIN,
        { grant_type: 'client_credentials' }, {
        headers

    }

    ).then(response => {
        return response.data.access_token;
    }).catch(error => {
        console.log(error.message);
        throw error;
    });
}

const traerPlaylist = async (token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    }
    return axios.get(process.env.URL_API_PLAYLIST, { headers })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
}

module.exports = {
    solicitarToken,
    traerPlaylist
}
