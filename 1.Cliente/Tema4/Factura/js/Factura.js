/**
 * Clase Factura.
 * @author Marcos Gallardo Pérez
 * @param {Cliente de la factura} cliente 
 * @param {Empresa de la factura} empresa 
 * @param {Elementos que se ofrecen en la factura} elementos 
 */
function Factura(cliente, empresa, elementos) {
    this.date = (new Date()).toDateString();
    this.cliente = cliente;
    this.empresa = empresa;
    this.elementos = elementos;
    
    this.baseImponible = this.calcularBaseImponible();
    this.cuotaTributaria = this.calcularCuotaTributaria();
    this.precioFinal = this.baseImponible +this.cuotaTributaria;

    this.id = this.uniqueID();
}
/**
 * Genera un id unico. 
 */
Factura.prototype.uniqueID = (function() {
    var id = 0; 
    return function() { return id++; };  
 })();

 /**
  * Comprueba que los campos sean las clases pertinentes.
  */
Factura.prototype.compruebaCampos = function (cliente, empresa) {
    if (!(cliente instanceof Cliente))
        throw new InstanceException("Es necesario que el cliente sea de la Clase cliente.");
    if (!(empresa instanceof Empresa))
        throw new InstanceException("Es necesario que la empresa sea de la Clase Empresa.");
}

/**
 * Calcula la base imponible.
 */
Factura.prototype.calcularBaseImponible = function () {
    sumatorioPrecio = 0;
    for (element of this.elementos) {
        sumatorioPrecio += element.cantidad * element.precio;
    }
    return sumatorioPrecio;
}

/**
 * Calcula la cuota tributaria.
 */
Factura.prototype.calcularCuotaTributaria = function () {
    let sumatorioIvas = 0;
    let iva;
    for (element of this.elementos) {
        switch (element.iva) {
            case '4%':
                iva = 0.04;
                break;
            case '10%':
                iva = 0.1;
                break;
            case '21%':
                iva = 0.21;
                break;
        }
        sumatorioIvas += element.cantidad * element.precio*iva;
    }
    return sumatorioIvas;

}