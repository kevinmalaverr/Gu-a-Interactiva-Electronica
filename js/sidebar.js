function abrir(tipo){
    $(".desplegable").css("width","60%"); 
    $(".desplegable").css("opacity","1");
    $("#fra").attr('src',tipo + ".html");
    actual = tipo;
    abierto = true;
}

function cerrar(){
    $(".desplegable").css("opacity","0");
    setTimeout(function(){
        $(".desplegable").css("width","0%");
    }, 200);
    abierto = false;
}

var abierto = false;
var actual = "";
function abrirCerrar(tipo){
    if((abierto) && (actual == tipo)){
        cerrar();
    }else{
        abrir(tipo);
    }
}