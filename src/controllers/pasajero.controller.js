const { Pasajero } = require('../models'); //No necesita indicarle el archivo, solo la carpeta, ya que lo desestructura desde index.js


class Viajero {

    async allPassengers(){

        return Pasajero.findAll();

    }

    async passengerId(id){

        return Pasajero.findByPk(id);

    }

    async newPassenger(body){

        return Pasajero.create(body);
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