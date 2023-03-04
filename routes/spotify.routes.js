'Ruta: /api/spotify';
const { Router } = require('express');
const { logginSpotify } = require('../controllers/spotify.controller');

const router = Router();

router.get('/', logginSpotify);

module.exports = router;