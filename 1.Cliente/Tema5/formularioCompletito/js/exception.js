class CampoVacioException extends Error {

    constructor(mensaje) {
        super(mensaje);
        this.name = 'CampoVacioException';
    }

}