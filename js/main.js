function responsive_header() {
    var header = document.getElementById("site-header");
    if(header.className == "header") header.className += " responsive";
    else header.className = "header";
}