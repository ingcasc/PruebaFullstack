const router = require('express').Router();
const apiPaisesRouter = require('./api/paises');
const apiUsuariosRouter = require('./api/usuarios');
const apiMonedasRouter = require('./api/monedas');
const apiMov_monedasRouter = require('./api/mov_monedas');


router.use('/paises',apiPaisesRouter);
router.use('/usuarios',apiUsuariosRouter);
router.use('/monedas',apiMonedasRouter);
router.use('/mov_monedas',apiMov_monedasRouter);




module.exports = router;