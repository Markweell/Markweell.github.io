let patrones = {
    nombre: [/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,}(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,})+$/,
     'Comienza por mayúsculas, con un mínimo de tres caracteres por nombre, al menos nombre y apellidos'],

    dni: [/^(\d{8})[- ](a-z)$/i,'Formato valido 12345678Z'],
    date: [/\d\d([-/ ])\d\d\1\d\d\d\d/,'Formatos validos: 11/12/2017, 11 12 2017, 11-12-2017'],
    url:[/^(http|https)\:\/\/([a-z0-9]+\.)+[a-z]{2,4}$/, "Formato valido: http:asdqwe.asd24.ase "],
    email:[/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/,"Formato valido: adwesdaw@asdqwe.asdas"],
    number:[/\d*/,"Permite uno o infinitos numeros."],
    telefono: [/^\d{9}$/,"Permite nueve numeros."]
};