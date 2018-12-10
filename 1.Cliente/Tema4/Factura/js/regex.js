let patrones = {
    nombre: [/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,}(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,})+$/,
     'Comienza por mayúsculas, con un mínimo de tres caracteres por nombre, al menos nombre y apellidos'],

    dni: [/^(\d{8})[- ](a-z)$/i,'Formato valido 12345678Z'],
    fecha: [/\d\d([-/ ])\d\d\1\d\d\d\d/],'Formatos validos: 11/12/2017, 11 12 2017, 11-12-2017']
};