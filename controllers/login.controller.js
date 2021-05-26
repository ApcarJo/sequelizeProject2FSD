const pasajeroController = require('./pasajero.controller');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "Wayco tiene futbolín";

class LoginController {

    async validate(nombreCheck,passwordCheck){
        
        let nombre = await pasajeroController.namePassenger(nombreCheck);
        let password = nombre.password;

        let verify = await bcrypt.compare(passwordCheck, password);

        if(!verify){
            throw new Error('Usuario o contraseña erróneos');
        }

        let payload = {
            pasajeroId : nombre.id,
            createdAt: new Date
        };

        return jwt.sign(payload, secret);
    }

}

const loginController = new LoginController();
module.exports = loginController;