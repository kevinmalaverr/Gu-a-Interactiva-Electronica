

$(".btnPrimary").click(function(){
    var res1 = $("#res1").val();
    var res2 = $("#res2").val();
    var col = $("#con").val();
    try {
        var duracion = 0.693 * (parseInt(res1) + parseInt(res2)) * (parseInt(col) * Math.pow(10,-6));
        var d = duracion.toString();
        if(d == "NaN"){
            $(".resultado").text("ingrese un valor valido");
            return;
        }
        $(".resultado").text(d.substr(0,3) + " Segundos");
    }
    catch(err) {
        $(".resultado").text("ingrese un valor valido");
    }

    
});