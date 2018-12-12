/**
 * Clase Elemento
 * @author Marcos Gallardo Pérez
 * @param {Cantidad de elementos} cantidad 
 * @param {Precio del elemento} precio 
 * @param {Iva del elemento} iva 
 * @param {Descripcion del elemento} descripcion 
 */
function Elemento( cantidad, precio, iva,descripcion,) {
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
    this.iva = iva;
}