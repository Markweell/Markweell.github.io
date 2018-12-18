let patrones = {
    nombre: [/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,}(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,})+$/,
     'Comienza por mayúsculas, con un mínimo de tres caracteres por nombre, al menos nombre y apellidos'],

    dni: [[/^(\d{8})[- ]?([TRWAGMYFPDXBNJZSQVHLCKET])$/i,["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"] ],'Formato valido 12345678Z'],

    date:[/\d\d\d\d([-/ ])\d\d\1\d\d/,'Formatos validos YYYY-MM-DD: 2017/12/11, 2017 11 12, 2017-11-12'],

    url:[/^(http|https)\:\/\/([a-z0-9]+\.)+[a-z]{2,4}$/, "Formato valido: http:asdqwe.asd24.ase "],

    email:[/[a-z]{3,16}\@[a-z]{1,7}\.[a-z]{1,3}/,"Formato valido: adwesdaw@asdqwe.asdas"],

    number:[/\d*/,"Permite uno o infinitos numeros."],

    telefono: [/^\d{9}$/,"Se requieren nueve numeros para un teléfono"],

    numCuCorriente:[/^\d*$/,"Permite cadenas tipo IBAN (todos los IBAN)"]
};