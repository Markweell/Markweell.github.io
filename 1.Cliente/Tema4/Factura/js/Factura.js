// factura = (function () {

//     function Factura(cliente, elementos) {
//         this.cliente = cliente;
//         this.elementos = elementos;
//         this.informacion = {
//             baseImponible: 0,
//             iva: 16,
//             total: 0,
//             formaPago: "contado"
//         };
//     }

//     getCliente = function(){
//         return this.cliente;
//     }


//     function getElementos() {
//         return this.elementos;
//     }
//     return {
//         Factura(cliente,elementos) : ()=>(Factura(cliente,elementos)),
//         getCliente : getCliente
//     }
// })();

class Factura {

    constructor(cliente, empresa, elemento) {
        this.compruebaCampos(cliente, empresa, elemento);
        this._date = new Date();
        this.cliente = cliente;
        this.elemento = elemento;

        if (this.contador == undefined)
            this.contador = 0;
        this.contador += 1;
    }
    compruebaCampos(cliente, empresa, elemento) {
        if (!(cliente instanceof Cliente))
            throw new InstanceException("Es necesario que el cliente sea de la Clase cliente.");
        if (!(empresa instanceof Empresa))
            throw new InstanceException("Es necesario que la empresa sea de la Clase Empresa.");
        if (!(elemento instanceof Elemento))
            throw new InstanceException("Es necesario que el elemento sea de la Clase Elemento.");
    }
    getCliente() {
        return this.cliente;
    }
    getElemento() {
        return this.elemento;
    }
    get date() {
        return this._date.toLocaleDateString();
    }

    set date(newDate) {
        if (newDate instanceof Date)
            this._date = newDate
        else
            throw new InstanceException("El campo Date debe ser una fecha.")
    }

}






// console.log(typeof cliente);
// console.log(cliente instanceof Cliente)  
// console.log(elemento instanceof Cliente)  
// console.log(cliente instanceof Elemento);
// console.log(elemento instanceof Elemento);
// console.log(elemento instanceof Object);
// console.log(cliente instanceof Object);