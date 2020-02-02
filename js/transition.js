function change(url){
    $(".transition").addClass("fade-out");

    setTimeout(function(){
        document.location.href = url;
    }, 440); 
}