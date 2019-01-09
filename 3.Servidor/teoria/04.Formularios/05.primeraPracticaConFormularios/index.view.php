<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/estilos.css">
    <title>Formulario Contacto</title>
</head>
<body>
    <main>
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
            <input type="text" class ="form-control" name ="Nombre" placeholder ="Nombre: " value ="">
            <input type="text" class ="form-control" name ="Correo" placeholder ="Correo: " value ="">
            <textarea name="mensaje" class = "form-control" placeholder="Mensaje"></textarea>
            <?php if (!empty($errores)): ?>
            <div class="alert error"> <?php echo $errores ?></div>
            <?php elseif ($enviado):?>
            <div class="alert success"><p>Enviado Correctamente.</p></div>
            <?php endif ?>
            <!-- 
            <div class="alert error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita soluta vitae. Libero ex aut dicta natus, voluptas a laboriosam nobis? Voluptatum delectus animi dolorem porro quaerat aliquam unde vero.</div>
            <div class="alert success">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quasi culpa, magni sed tempore dolore impedit ducimus consequuntur rem ex voluptate illo dignissimos consectetur reiciendis. Excepturi cupiditate ipsum enim! Ea!</div> 
            -->
            <input type="submit" name="submit" class="btn btn-primary" value="Enviar Correo">   
        </form>
    </main>
    
</body>
</html>