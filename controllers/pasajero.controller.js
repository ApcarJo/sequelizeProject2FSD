const { Pasajero } = require('../models'); //No necesita indicarle el archivo, solo la carpeta, ya que lo desestructura desde index.js
const bcrypt = require('bcrypt');

class Viajero {

    async allPassengers(){

        return Pasajero.findAll();

    }

    async namePassenger(nombre){
        return Pasajero.findOne({
            where: {nombre}
        })
    }

    async passengerId(id){

        return Pasajero.findByPk(id);

    }

    async newPassenger(body){

        let password = body.password;
        let passwordHashed = bcrypt.hashSync(password, 10);
        body.password = passwordHashed;
        return Pasajero.create(body);
    }

    async loginPassenger(body){

    }

    async deletePassenger(id){
        return Pasajero.destroy({where: {id: id}});
    }

    async modifyPassenger(cuerpoDeDatos){
        return Pasajero.update(
            //Datos que cambiamos
            {edad: cuerpoDeDatos.edad, especialidad: cuerpoDeDatos.especialidad},
            //Donde..
            {where: {id: cuerpoDeDatos.id}}
        )
    }

}

let pasajeroController = new Viajero();
module.exports = pasajeroController;