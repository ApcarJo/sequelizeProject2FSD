const router = require('express').Router();

const pasajerosRouter = require('./routers/pasajero.router.js');
const navesRouter = require('./routers/nave.router');
const loginRouter = require('./routers/login.router');

router.use('/pasajeros', pasajerosRouter);
router.use('/naves', navesRouter);
router.use('/login', loginRouter);

module.exports = router;