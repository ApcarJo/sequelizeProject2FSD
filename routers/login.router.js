const router = require('express').Router();
const logintController = require('../controllers/login.Controller');
const pasajeroController = require('../controllers/pasajero.Controller');

router.post('/', async (req, res)=> {
    try {

        const nombreCheck = req.body.nombre;
        const passwordCheck= req.body.password;
        let token = await logintController.validate(nombreCheck,passwordCheck);
        res.json(token);
        
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    }
})

module.exports = router;