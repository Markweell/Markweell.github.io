{
    document.addEventListener('DOMContentLoaded',init);
    function init(){
        document.getElementById("ejercicio2").addEventListener('click', abrirEjercicio2.bind(null,1,2),false);
        document.getElementById("ejercicio1").addEventListener('click', ()=>abrirEjercicio1(600));
        document.getElementsByTagName("body")[0].addEventListener('click',clickea,true);
    }
    function abrirEjercicio1(num1=800,num2=800, ev){
        //Al invocar el método de la manera que lo he hecho, no se puede acceder al event. 
        //ev.preventDefault();
        window.open("ejercicio1.html","_SELF","heigth='"+num1+"' width='"+num2+"'");
    }
    function abrirEjercicio2(num1,num2,ev){
        ev.preventDefault();
        alert("Evento del click2: " + num1+num2);
        window.open("ejercicio2.html","_SELF","heigth='"+num1+"' width='"+num2+"'");
    }
    function clickea(ev){
        ev.target.style.color= 'red';
        alert('EventoDelBody');
    }

}