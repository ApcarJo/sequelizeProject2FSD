const router = require('express').Router(); //Llama a Router que está dentro de express
const pasajeroController = require('../controllers/pasajero.controller');


// API CRUD PASAJERO

router.get('/', async (req, res) =>{
    try {
        res.json(await pasajeroController.allPassengers());
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});

router.get('/:id', authenticate, async (req, res) =>{
    try {
        const id = req.params.id;
        res.json(await pasajeroController.pasengerId(id));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        res.json(await pasajeroController.newPassenger(body));
        
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});

router.post('/login', async (req, res) => {
    try {
        const body = req.body;
        res.json(await pasajeroController.loginPassenger(body));   
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});


router.put('/', authenticate, async (req, res) =>{
    try {
        const cuerpoDeDatos = req.body;
        res.json(await pasajeroController.modifyPassenger(cuerpoDeDatos));
        
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});

router.delete('/:id', authenticate, async (req, res) =>{
    try {
        const id = req.params.id;
        res.json(await pasajeroController.deletePassenger(id));
        
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});

module.exports = router;