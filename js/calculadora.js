var colors = [
    "#2c3e50",
    "#a76830",
    "#e74c3c",
    "#e67e22",
    "#f1c40f",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#95a5a6",
    "#fff",
];

var colTol = [
    "#ccae62",
    "#d1ccc0",
];

function calc(){
    var pos1 = document.getElementById("f1").options.selectedIndex;
    var pos2 = document.getElementById("f2").options.selectedIndex;
    var pos3 = document.getElementById("f3").options.selectedIndex;
    var pos4 = document.getElementById("f4").options.selectedIndex;
    
    var tol = "Tol: ± "+((pos4 + 1)*5).toString() + "%";

    $(".franja1").css("background-color",colors[pos1]);
    $(".franja2").css("background-color",colors[pos2]);
    $(".franja3").css("background-color",colors[pos3]);
    $(".franja4").css("background-color",colTol[pos4]);
    $(".res").text(calcular(pos1,pos2,pos3));
    $(".tol").text(tol);
}

function calcular(p1,p2,p3){
    var valor= ((p1*10) + p2) * Math.pow(10,p3);
    var valorString  = valor.toString();
    if(valorString.length >= 7){
        valorString = (parseInt(valorString)/1000000).toString()
        return valorString + " MΩ";
    }else if(valorString.length >= 4){
        valorString = (parseInt(valorString)/1000).toString()
        return valorString + " KΩ";
    }else{
        return valorString + " Ω";
    }
}
