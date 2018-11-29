{
    /**
     * Objeto Gato
     * @author Marcos Gallardo Pérez
     */

     
    let fechaDeNacimiento;
    let raza;
    let peso;
    let muerto;

    function Gato(nombre,fechaDeNacimiento,raza,peso){
        this.nombre=nombre;
        this.fechaDeNacimiento=fechaDeNacimiento;
        this.raza=raza;
        this.peso=peso;
    }
    Gato.prototype.jugar = ()=>{
        (compruebaContantesVitales())?peso--:muerto=true;
    }
    Gato.prototype.getNombre =()=>{
        console.log(this.nombre);
        return this.nombre;
    }
    function compruebaContantesVitales(){
        return (peso>=1);
    }
}