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

    function Gato(nombre,fechaDeNacimiento,raza,peso){
        this.nombre=nombre;
        this.fechaDeNacimiento=fechaDeNacimiento;
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
    Gato.prototype.getPeso = function(){
        return this.peso;
    }
    Gato.prototype.getMuerto = function(){
        return this.muerto;
    }



}