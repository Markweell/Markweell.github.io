{
    /**
     * Objeto Gato
     * @author Marcos Gallardo Pérez
     */

    let nombre;
    let fechaDeNacimiento;
    let raza;
    let peso;
    let muerto;
    let edad;

    function Gato(nombre ='Garfiel',fechaDeNacimiento=new Date(),raza='Siames',peso=14){
        this.nombre=nombre;
        this.fechaDeNacimiento=fechaDeNacimiento;
        this.edad = getEdad(fechaDeNacimiento);
        this.raza=raza;
        this.peso=peso;
        this.muerto=false;
        //console.log(this.getNombre());
    }

    Gato.prototype.jugar = function(){
        (this.peso>1)?this.peso--:this.muerto=true;
    }
    Gato.prototype.comer= function(){
        (this.peso<15)?this.peso++:this.muerto=true;
    }
    Gato.prototype.getNombre = function(){
        return this.nombre;
    }
    Gato.prototype.getRaza = function(){
        return this.raza;
    }
    Gato.prototype.getFecha = function(){
        return this.fechaDeNacimiento;
    }
    function getEdad(fechaDeNacimiento){
        return (new Date()).getFullYear() - fechaDeNacimiento.split('/')[2];
    }
    
    Gato.prototype.getPeso = function(){
        return this.peso;
    }
    Gato.prototype.getMuerto = function(){
        return this.muerto;
    }



}