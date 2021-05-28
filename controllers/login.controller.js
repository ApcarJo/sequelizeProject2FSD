const pasajeroController = require('./pasajero.controller');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "Wayco tiene futbolín";

class LoginController {

    async validate(nombreCheck,passwordCheck){

        //validar los datos de entrada

        if (! /[a-z]/gi.test(nombreCheck)){
            console.log('El nombre no es correcto');
            return;
        }
        
        let pasajero = await pasajeroController.namePassenger(nombreCheck);
        let password = pasajero.password;

        let verify = await bcrypt.compare(passwordCheck, password);

        if(!verify){
            throw new Error('Usuario o contraseña erróneos');
        }

        let payload = {
            pasajeroId : pasajero.id,
            createdAt: new Date,
            isAdmin: pasajero.isAdmin,
        };

        return jwt.sign(payload, secret);
    }

}

const loginController = new LoginController();
module.exports = loginController;