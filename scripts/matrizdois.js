function somarDois(){
    let v;
    
    v = [[],[]];
    
    let v1;
    let v2;
    let v3;
    let v4;
    let v5;
    let v6;
    let v7;
    let v8;

    v1 = Number(document.getElementById("i1").value);
    v2 = Number(document.getElementById("i2").value);
    v3 = Number(document.getElementById("i3").value);
    v4 = Number(document.getElementById("i4").value);
    v5 = Number(document.getElementById("i5").value);
    v6 = Number(document.getElementById("i6").value);
    v7 = Number(document.getElementById("i7").value);
    v8 = Number(document.getElementById("i8").value);
    
    if(isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4) || isNaN(v5) || isNaN(v6) || isNaN(v7) || isNaN(v8)){
        return;
    }

    v[0][0] = v1+v5;
    v[0][1] = v2+v6;
    v[1][0] = v3+v7;
    v[1][1] = v4+v8;

    let tabela = document.createElement("table");
    tabela.className = "table table-bordered";

    let tr1 = document.createElement("tr");
    let tr2 = document.createElement("tr");
    
    let t1 = document.createElement("td");
    t1.textContent = v[0][0];
    
    let t2 = document.createElement("td");
    t2.textContent = v[0][1];
    
    let t3 = document.createElement("td");
    t3.textContent = v[1][0];
    
    let t4 = document.createElement("td");
    t4.textContent = v[1][1];
    
    tr1.appendChild(t1);
    tr1.appendChild(t2);
    tr2.appendChild(t3);
    tr2.appendChild(t4);

    tabela.appendChild(tr1);
    tabela.appendChild(tr2);

    document.getElementById("resultado").innerHTML = "";
    
    document.getElementById("resultado").appendChild(tabela);


}

function subDois(){
    let v;
    
    v = [[],[]];
    
    let v1;
    let v2;
    let v3;
    let v4;
    let v5;
    let v6;
    let v7;
    let v8;

    v1 = Number(document.getElementById("i1").value);
    v2 = Number(document.getElementById("i2").value);
    v3 = Number(document.getElementById("i3").value);
    v4 = Number(document.getElementById("i4").value);
    v5 = Number(document.getElementById("i5").value);
    v6 = Number(document.getElementById("i6").value);
    v7 = Number(document.getElementById("i7").value);
    v8 = Number(document.getElementById("i8").value);
    
    if(isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4) || isNaN(v5) || isNaN(v6) || isNaN(v7) || isNaN(v8)){
        return;
    }

    v[0][0] = v1-v5;
    v[0][1] = v2-v6;
    v[1][0] = v3-v7;
    v[1][1] = v4-v8;

    let tabela = document.createElement("table");
    tabela.className = "table table-bordered";

    let tr1 = document.createElement("tr");
    let tr2 = document.createElement("tr");
    
    let t1 = document.createElement("td");
    t1.textContent = v[0][0];
    
    let t2 = document.createElement("td");
    t2.textContent = v[0][1];
    
    let t3 = document.createElement("td");
    t3.textContent = v[1][0];
    
    let t4 = document.createElement("td");
    t4.textContent = v[1][1];
    
    tr1.appendChild(t1);
    tr1.appendChild(t2);
    tr2.appendChild(t3);
    tr2.appendChild(t4);

    tabela.appendChild(tr1);
    tabela.appendChild(tr2);

    document.getElementById("resultado").innerHTML = "";

    document.getElementById("resultado").appendChild(tabela);

}

function multDois(){
    let v;
    
    v = [[],[]];
    
    let v1;
    let v2;
    let v3;
    let v4;
    let v5;
    let v6;
    let v7;
    let v8;

    v1 = Number(document.getElementById("i1").value);
    v2 = Number(document.getElementById("i2").value);
    v3 = Number(document.getElementById("i3").value);
    v4 = Number(document.getElementById("i4").value);
    v5 = Number(document.getElementById("i5").value);
    v6 = Number(document.getElementById("i6").value);
    v7 = Number(document.getElementById("i7").value);
    v8 = Number(document.getElementById("i8").value);
    
    if(isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4) || isNaN(v5) || isNaN(v6) || isNaN(v7) || isNaN(v8)){
        return;
    }

    v[0][0] = v1*v5 + v2*v7;
    v[0][1] = v1*v6 + v2*v8;
    v[1][0] = v3*v5 + v4*v7;
    v[1][1] = v3*v6 + v4*v8;

    let tabela = document.createElement("table");
    tabela.className = "table table-bordered";

    let tr1 = document.createElement("tr");
    let tr2 = document.createElement("tr");
    
    let t1 = document.createElement("td");
    t1.textContent = v[0][0];
    
    let t2 = document.createElement("td");
    t2.textContent = v[0][1];
    
    let t3 = document.createElement("td");
    t3.textContent = v[1][0];
    
    let t4 = document.createElement("td");
    t4.textContent = v[1][1];
    
    tr1.appendChild(t1);
    tr1.appendChild(t2);
    tr2.appendChild(t3);
    tr2.appendChild(t4);

    tabela.appendChild(tr1);
    tabela.appendChild(tr2);

    document.getElementById("resultado").innerHTML = "";

    document.getElementById("resultado").appendChild(tabela);
}