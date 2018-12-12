/**
 * Excepcion al recibir un parametro cuando se espera otro. 
 */
class InstanceException extends Error {

    constructor(mensaje) {
        super(mensaje);
        this.name = 'InstanceException';
    }

}