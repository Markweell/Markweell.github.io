{
    

    let inputs;
    let inputsCliente = [];
    let inputsEmpresa = [];
    let numElementos;
    let arrayElementos = [];

    function init() {
        inputs = document.getElementsByTagName("input");
        clasificarInputs();

        numElementos = 1;
        
        document.getElementById('button').addEventListener('click', generaFactura);
        document.getElementById('buttonElemento').addEventListener('click', generaOtroElemento);
    }

    /**
     * Ordena el array imputs, dividiendo los imputs del cliente y de la empresa.
     */
    function clasificarInputs() {
        for (element of inputs) {
            if (/Cliente/.test(element.id)) {
                inputsCliente.push(element);
            } else if (/Empresa/.test(element.id)) {
                inputsEmpresa.push(element);
            }
        }
    }

    /**
     * Crea la factura y la escribe. 
     */
    function generaFactura() {
        [nombre, direccion, telefono, nif] = inputsCliente;
        cliente = new Cliente(nombre.value, direccion.value, telefono.value, nif.value);
        [nombre, direccion, telefono, nif] = inputsEmpresa;
        empresa = new Empresa(nombre.value, direccion.value, telefono.value, nif.value);

        meteElementosEnArray();
        
        factura = new Factura(cliente, empresa, arrayElementos);
        escribeFactura();
        arrayElementos=[];
    }

    /**
     * Abre una ventana con la factura.
     */
    function escribeFactura(){
        ventana = window.open('', '', 'width=400px');
        ventana.document.write(
            `
            <p> Nombre del cliente: ${factura.cliente.nombre} </p>
            <p> Dirección del cliente: ${factura.cliente.direccion} </p>
            <p> Teléfono del cliente:  ${factura.cliente.telefono}</p>
            <p> Nif del cliente: ${factura.cliente.nif}</p> 
            <br>
            <p> Nombre de la empresa: ${factura.empresa.nombre} </p>
            <p> Dirección de la empresa: ${factura.empresa.direccion} </p>
            <p> Teléfono de la empresa: ${factura.empresa.telefono}</p>
            <p> Nif de la empresa: ${factura.empresa.nif}</p>
            <br>
            <table>
                <tr>
                <td><strong>Cantidad</strong></td>
                <td><strong>Precio</strong></td>
                <td><strong>Iva</strong></td>
                <td><strong>Descripción</strong></td>
                </tr>
                ${elementosToString()}
            </table>

            <p> Base imponible:${factura.baseImponible} €</p>
            <p> Cuota Tributaria: ${factura.cuotaTributaria} € </p>
            <p> <h3>Importe total: ${factura.precioFinal} €</h3></p>
            <span>${factura.id}</span>
            <span>${factura.date}</span>
            `
        );
        ventana.document.close();
    }

    /**
     * Genera en el dom la opción para agregar otro elemento. 
     */
    function generaOtroElemento() {
        numElementos += 1;
        div = document.getElementsByClassName('elemento')[0].appendChild(document.createElement('div'));
        div.innerHTML =
            `
            <span>Cantidad: </span> <input type="number" name="cantidadElemento" id="cantidadElemento${numElementos}" placeholder="Cantidad: ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Precio: </span> <input type="number" name="precioElemento" id="precioElemento${numElementos}" placeholder="Precio: ">
            <span>Euros</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>IVA:</span> <select id = "ivaElemento${numElementos}" name="ivaElemento">
                <option>4%</option>
                <option>10%</option>
                <option>21%</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Descripción: </span><input type="text" name="descripcionElemento" id="descripcionElemento${numElementos}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br>
        `;
    }

    /**
     * Recoge los elementos del dom para guardarlos en un array
     */
    function meteElementosEnArray() {
        for (let i = 1; i <= numElementos; i++) {
            cantidad = document.getElementById("cantidadElemento" + i);
            precio = document.getElementById("precioElemento" + i);
            iva = document.getElementById("ivaElemento" + i);
            descripcion = document.getElementById("descripcionElemento" + i)
            arrayElementos.push(new Elemento(cantidad.value, precio.value, iva.value, descripcion.value));
        }
    }

    /**
     * Crea una fila de una tabla en formato string. 
     */
    function elementosToString() {
        mensaje = "";
        for (element of arrayElementos) {
            mensaje += '<tr><td>' + element.cantidad + 'u.</td><td>' + element.precio + '€</td><td>' + element.iva + '</td><td>' + element.descripcion + '</td></tr>';
        }
        return mensaje;
    }
    document.addEventListener('DOMContentLoaded', init);

}