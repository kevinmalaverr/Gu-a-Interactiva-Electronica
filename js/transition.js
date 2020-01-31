function change(url){
    var layers = document.querySelectorAll(".top-layer");
    for (const layer of layers) {
      layer.classList.toggle("active");
    }
    setTimeout(function(){
        document.location.href = url;
    }, 900); 
}

$(document).ready(function(){
    setTimeout(function(){
        //$(".active").css("background", "transparent");
    }, 600); 
});
