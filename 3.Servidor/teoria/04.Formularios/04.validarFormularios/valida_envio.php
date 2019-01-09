<?php
# El primer método usa la variable $_SERVER['REQUEST_METHOD'] en la que se almacena el método que usa el form
# El principal problema de este método es que si tienes varios formularios no sabes por cual se ha enviado.ew42s<<
/*
if($_SERVER['REQUEST_METHOD'] == 'GET'){
    echo 'Se enviaron por GET';
}else if($_SERVER['REQUEST_METHOD'] == 'POST'){
    echo 'Se enviaron por POST';
}else{
    echo 'No se envio ni por GET ni por POST';
}
/*
*/
# La segunda forma es poniendole un nombre al <input name ='submit'> del html, y viendo si el nombre existe,
# si existe, es que se ha usado el submit y por tanto se ha mandado el form.
# La ventaja frente al anterior es que puedes ponerles varios nombres a varios submit, de esta manera puedes comprobar
# si se ha enviado correctamente más de un formulario.
/*
if (isset($_GET['submit'])){
    echo 'Se ha enviado los datos correctamente por GET';
}else if(isset($_POST['submit'])) {
    echo 'Se ha enviado los datos correctamente por POST';
}else{
    echo'Se ha producido un error al mandar los datos';
}
/*
*/

if (isset($_POST['submit'])) {
    $nombre=$_POST['nombre'];
    $correo= $_POST['correo'];

    if (!empty($nombre)) {
        #stripslashes --> impide el uso de \ por motivos de seguridad.
        #trim --> Limpia los espacios en blanco antes y despues del nombre.
        #htmlspecialchars --> impide ejecutar código html por motivos de seguridad.
        /*
        $nombre = stripslashes( htmlspecialchars(trim($nombre)));
        /* */
        $nombre = filter_var($nombre, FILTER_SANITIZE_STRING);
        /*
        */
        echo 'Tu nombre es : ' .$nombre;
    } else {
        $errores .= 'Por favor agrega un nombre';
    }
    
    if (!empty($correo)) {
        #stripslashes --> impide el uso de \ por motivos de seguridad.
        #trim --> Limpia los espacios en blanco antes y despues del nombre.
        #htmlspecialchars --> impide ejecutar código html por motivos de seguridad.
        $correo = stripslashes(htmlspecialchars(trim($correo)));
        echo '<br> y tu correo es: ' .$correo;
    }
}
