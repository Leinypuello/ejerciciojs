var preciobase =100;
var descuento= 2;

function calcularprecio(){
    
   
    if(preciobase<=0  || descuento<=0 || descuento>100){
        return ("los valores ingresados son invalidos");
    }

    if(descuento===0){
        return (preciobase);
    
    }

    if(descuento>0 && descuento <=100){
        let preciofinal = preciobase - (preciobase * descuento /100);
        return("el precio final con su descuento es: " + preciofinal);
    }
}
console.log(calcularprecio(preciobase-descuento));