class FormularioException extends Error {

    constructor(mensaje) {
        super(mensaje);
        this.name = 'FormularioException';
    }

}