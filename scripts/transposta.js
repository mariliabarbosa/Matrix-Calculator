function transDois(){
    let v1 = Number(document.getElementById("dois_1").value);
    let v2 = Number(document.getElementById("dois_2").value);
    let v3 = Number(document.getElementById("dois_3").value);
    let v4 = Number(document.getElementById("dois_4").value);
    
    let v = [[v1,v3],[v2,v4]];

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

    document.getElementById("resultado2").innerHTML = "";
    
    document.getElementById("resultado2").appendChild(tabela);
}

function transTres(){
    let v1 = Number(document.getElementById("tres_1").value);
    let v2 = Number(document.getElementById("tres_2").value);
    let v3 = Number(document.getElementById("tres_3").value);
    let v4 = Number(document.getElementById("tres_4").value);
    let v5 = Number(document.getElementById("tres_5").value);
    let v6 = Number(document.getElementById("tres_6").value);
    let v7 = Number(document.getElementById("tres_7").value);
    let v8 = Number(document.getElementById("tres_8").value);
    let v9 = Number(document.getElementById("tres_9").value);

    let v = [[v1, v4, v7],
             [v2, v5, v8],
             [v3, v6, v9]];

    let tabela = document.createElement("table");
    tabela.className = "table table-bordered";

    let tr1 = document.createElement("tr");
    let tr2 = document.createElement("tr");
    let tr3 = document.createElement("tr");
    
    let t1 = document.createElement("td");
    t1.textContent = v[0][0];
    
    let t2 = document.createElement("td");
    t2.textContent = v[0][1];
    
    let t3 = document.createElement("td");
    t3.textContent = v[0][2];
    
    let t4 = document.createElement("td");
    t4.textContent = v[1][0];

    let t5 = document.createElement("td");
    t5.textContent = v[1][1];
    
    let t6 = document.createElement("td");
    t6.textContent = v[1][2];
    
    let t7 = document.createElement("td");
    t7.textContent = v[2][0];
    
    let t8 = document.createElement("td");
    t8.textContent = v[2][1];
    
    let t9 = document.createElement("td");
    t9.textContent = v[2][2];
    
    tr1.appendChild(t1);
    tr1.appendChild(t2);
    tr1.appendChild(t3);
    tr2.appendChild(t4);
    tr2.appendChild(t5);
    tr2.appendChild(t6);
    tr3.appendChild(t7);
    tr3.appendChild(t8);
    tr3.appendChild(t9);

    tabela.appendChild(tr1);
    tabela.appendChild(tr2);
    tabela.appendChild(tr3);

    document.getElementById("resultado3").innerHTML = "";
    
    document.getElementById("resultado3").appendChild(tabela);
}