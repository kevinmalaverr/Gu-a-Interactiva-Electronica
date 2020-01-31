var p = 1;
function keynav(e) {
    e = e || window.event;
    if (e.keyCode == 38 && p != 1) {p--}
    if (e.keyCode == 40 && p != 17) {p++}
    document.location.href = "#p" + p;
    return false;
}

var kb=true;
function init() {
    if (kb == null) {document.onkeydown = "void(0)"; kb=true}
    else if (kb == true) {document.onkeydown = keynav; kb=null}
    return false
}

init();