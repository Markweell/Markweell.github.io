/**
 * Clase Reserva
 * @author Marcos Gallardo Pérez
 */

function Reserva(nombre = "", correo = "", fecha = "", hora = "", numNoches = "", numPersonas = "", servicioRes = "", edadCliente = "") {
    this.nombre = this.comprobarNombre(nombre);
    this.correo = this.comprobarCorreo(correo);
    [this.fecha,this.diasFaltantes] = this.comprobarFecha(fecha);
    this.hora = this.comprobarHora(hora);
    this.numNoches = this.comprobarNumNoches(numNoches);
    this.numPersonas = this.comprobarNumPersonas(numPersonas);
    this.servicioRes = this.comprobarServicios(servicioRes);
    this.edadCliente = this.comprobarEdadClientes(edadCliente);

    this.id = this.uniqueID();
    this.mostrar();
}

const patrones = {

    nombre: [/^[A-Z][a-z]{1,30}$/, "Primera letra en mayuscula, las siguientes en minusculas."],
    correo: [/^[a-z]{1,10}[@][a-z]{1,6}[\.][a-z]{1,4}$/, "Formato Esperado: eeeee@eeee.eee donde 'e' es cualquier letra."],
    fecha: [/^(\d\d)([-\/\: ])(\d\d)\2(\d\d\d\d)$/, "Formato Esperado: dd/mm/yyyy, dd-mm-yyyy o dd mm yyyy  donde 'e' es cualquier letra."],
    hora: [/^\d\d[\:]\d\d$/, "Formato Esperado: nn:nn donde 'n' es cualquier numero."],
    numNoches: [/\d+/, "Debe ser un número"],
    numPersonas: [/\d+/, "Debe de ser un número"],
    servicioRes: [/[dac]?/i, "Debe de ser un texto formado por 'd' si quieres desayuno,'a' si quieres almuerzo,'c' si quieres cena. Por ejemplo si quieres todo sería: dac"],
    edadCliente: [/\d+/, "Debe de ser un número"]
};

Reserva.prototype.patrones = patrones;
Reserva.prototype.comprobarNombre = function (nombre) {
    if (!patrones['nombre'][0].test(nombre))
        throw new Error('Nombre Invalido');
    return nombre;

};

Reserva.prototype.comprobarCorreo = function (correo) {
    if (!patrones['correo'][0].test(correo))
        throw new Error('Correo Invalido');
    return correo;
};

Reserva.prototype.comprobarFecha = function (fecha) {
    
    [, dia, , mes, anio] = patrones['fecha'][0].exec(fecha);
    if (parseInt(dia) > 31 || parseInt(mes) > 12) {
        throw new Error('Fecha invalida');
    }
    switch (mes) {
        case '02':
            if (parseInt(dia) > 29) {
                throw new Error('Fecha invalida');
            }
            if (parseInt(dia) === 29) {
                if (!((anio % 4 == 0) && ((anio % 100 != 0)) || (anio % 400 == 0))) {
                    throw new Error('Fecha invalida');
                }
            }
            break;
        case '01':
        case '03':
        case '05':
        case '07':
        case '08':
        case '10':
        case '12':
            if (parseInt(dia) > 31) {
                throw new Error('Fecha invalida');
            }
            break;
        case '04':
        case '06':
        case '09':
        case '11':
            if (parseInt(dia) > 30) {
                throw new Error('Fecha invalida');
            }
            break;

    }
    let fechaReserva = new Date(anio,mes-1,dia).getTime();
    let fechaActual = new Date().getTime();
    let seconds_left = (fechaReserva - fechaActual) / 1000;
    diasFaltantes = parseInt(seconds_left / 86400);
    if(diasFaltantes<0){
        throw new Error('La fecha de reserva debe ser superior o igual al día actual'); 
    }
    return [fecha,diasFaltantes+1];
};

Reserva.prototype.comprobarHora = function (hora) {
    if (!patrones['hora'][0].test(hora))
        throw new Error('Hora invalida');
    return hora;
};

Reserva.prototype.comprobarNumNoches = function (numNoches) {
    if (!patrones['numNoches'][0].test(numNoches))
        throw new Error('Número de noches invalida');
    return numNoches;
};

Reserva.prototype.comprobarNumPersonas = function (numPersonas) {
    if (!patrones['numPersonas'][0].test(numPersonas))
        throw new Error('Número de personas invalida');
    return numPersonas;
};

Reserva.prototype.comprobarServicios = function (servicios) {
    let mensaje = "";
    if (/d/.test(servicios))
        mensaje += "Desayuno "
    if (/a/.test(servicios))
        mensaje += "Almuerzo "
    if (/c/.test(servicios))
        mensaje += "Cena "
    mensaje === "" ? mensaje = "Ningún servicio" : "";
    return mensaje;
}
Reserva.prototype.comprobarEdadClientes = function (edadCliente) {
    if (edadCliente === '') 
        throw new Error('Debe seleccionar una edad');
    return edadCliente;
}

Reserva.prototype.uniqueID = (function () {
    let id = 0;
    return function () {
        return id++;
    };
})();

Reserva.prototype.mostrar = function () {

    let ventana = window.open("", "", "height=200,width=300,top=50,left=50");
    ventana.document.write(
        `
    <html>
    <body>
        Nombre: ${this.nombre}<br>
        Correo : ${this.correo}<br>
        Fecha : ${this.fecha}<br>
        Hora : ${this.hora}<br>
        Número de noches: ${this.numNoches}<br>
        Número de Personas : ${this.numPersonas}<br>
        Servicios Restaurante : ${this.servicioRes}<br>
        Edad cliente  ${this.edadCliente}<br>
        Id de la reserva : ${this.id} <br>

        <p>Reserva Realizada por Marcos Gallardo Pérez</p>
    </body>
    </html>
    `);
    ventana.document.close();
}