const { request, response } = require('express');
const { solicitarToken, traerPlaylist } = require('../services/spotify.service');

const logginSpotify = async (req = request, res = response) => {
    try {
        const token = await solicitarToken();
        if (!token) {
            return res.status(400).json({
                msg: 'Error al traer el token'
            })
        }
        const playlist = await traerPlaylist(token);

        playlists = playlist.items

        
        return res.render('playlists', { playlists });


        // return res.status(200).json({
        //     playlists: playlist.items.slice(1,4)
        // })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error interno en el servidor'
        })
    }

}



module.exports = {
    logginSpotify,

}