function menu(event){
    var x = event.keyCode;
    
    switch(x){
        case 49:
            window.location.href = "pages/matriz2.html";
            break;
        case 50:
            window.location.href = "pages/matriz3.html";
            break;
        case 51:
            window.location.href = "pages/determinante.html";
            break;
        case 52:
            window.location.href = "pages/identidade.html";
            break;
        case 53:
            window.location.href = "pages/transposta.html";
            break;
        case 101:
            window.location.href = "pages/equipe.html";
    }
}