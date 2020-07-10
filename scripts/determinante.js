function detDois(){
    let v1;
    let v2;
    let v3;
    let v4;

    let det;

    v1 = Number(document.getElementById("dois_1").value);
    v2 = Number(document.getElementById("dois_2").value);
    v3 = Number(document.getElementById("dois_3").value);
    v4 = Number(document.getElementById("dois_4").value);

    if(isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4)){
        return;
    }

    det = v1 * v4 - v3 * v2;

    document.getElementById("resultado2").innerText = det;
    
}

function detTres(){
    let v1;
    let v2;
    let v3;
    let v4;
    let v5;
    let v6;
    let v7;
    let v8;
    let v9;

    let det;

    v1 = Number(document.getElementById("tres_1").value);
    v2 = Number(document.getElementById("tres_2").value);
    v3 = Number(document.getElementById("tres_3").value);
    v4 = Number(document.getElementById("tres_4").value);
    v5 = Number(document.getElementById("tres_5").value);
    v6 = Number(document.getElementById("tres_6").value);
    v7 = Number(document.getElementById("tres_7").value);
    v8 = Number(document.getElementById("tres_8").value);
    v9 = Number(document.getElementById("tres_9").value);

    det = (v1*v5*v9 + v2*v6*v7 + v3*v4*v8) - (v7*v5*v3 + v8*v6*v1 + v9*v4*v2);

    if(isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4) || isNaN(v5) || isNaN(v6) || isNaN(v7) || isNaN(v8) || isNaN(v9)){
        return;
    }

    document.getElementById("resultado3").innerText = det;

}