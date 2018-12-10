{
    document.addEventListener('DOMContentLoaded', init);
    var factura;
    function init() {

        cliente = new Cliente('marcos', 'C/felicianaEnriquez', '999999999', '0000000');
        elemento = new Elemento("Deasdqwe", 8, 9);

        try {
            factura = new Factura(cliente, elemento);
        } catch (e) {
            if (e instanceof InstanceException) {
                console.log(e);
            }
            //console.log(e)
        }


        // console.log(factura.getElemento());
        // console.log(factura.getCliente());

    }
}