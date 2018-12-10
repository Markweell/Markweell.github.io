class InstanceException extends Error {

    constructor(mensaje) {
        super(mensaje);
        this.name = 'InstanceException';
    }

}