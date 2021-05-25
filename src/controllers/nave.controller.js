const { Nave } = require('../models'); // Cojo mi modelo Nave de la carpeta models

class Spaceship {

    async allSpaceships(){

        return Nave.findAll();

    }

    async spaceshipsId(id){

        return Nave.findByPk(id);

    }

    async newSpaceship(body){

        return Nave.create(body);
    }

    async deleteSpaceship(id){
        return Nave.destroy({where: {id: id}});
    }

    async modifySpaceship(cuerpoDeDatos){
        return Nave.update(
            //Datos que cambiamos
            {aforo: cuerpoDeDatos.aforo, reparaciones: cuerpoDeDatos.reparaciones, tipo: cuerpoDeDatos.tipo},
            //Donde..
            {where: {id: cuerpoDeDatos.id}}
        )
    }
}

let naveController = new Spaceship();
module.exports = naveController;