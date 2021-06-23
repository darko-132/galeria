var i=1

function adelante(){
    i++;
    if(i>5)
        i=1
        var foto=document.getElementById("foto")
        foto.src="./imagenes/planta-"+i+".jpg"
}
function atras(){
    i--;
    if(i<1)
        i=5
        var foto=document.getElementById("foto")
        foto.src="./imagenes/planta-"+i+".jpg"
}