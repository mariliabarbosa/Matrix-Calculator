function somarTres(){
    let v;
    
    v = [[],[],[]];
    
    let v1;
    let v2;
    let v3;
    let v4;
    let v5;
    let v6;
    let v7;
    let v8;
    let v9;
    let v10;
    let v11;
    let v12;
    let v13;
    let v14;
    let v15;
    let v16;
    let v17;
    let v18;

    v1 = Number(document.getElementById("i1").value);
    v2 = Number(document.getElementById("i2").value);
    v3 = Number(document.getElementById("i3").value);
    v4 = Number(document.getElementById("i4").value);
    v5 = Number(document.getElementById("i5").value);
    v6 = Number(document.getElementById("i6").value);
    v7 = Number(document.getElementById("i7").value);
    v8 = Number(document.getElementById("i8").value);
    v9 = Number(document.getElementById("i9").value);
    v10 = Number(document.getElementById("i10").value);
    v11 = Number(document.getElementById("i11").value);
    v12 = Number(document.getElementById("i12").value);
    v13 = Number(document.getElementById("i13").value);
    v14 = Number(document.getElementById("i14").value);
    v15 = Number(document.getElementById("i15").value);
    v16 = Number(document.getElementById("i16").value);
    v17 = Number(document.getElementById("i17").value);
    v18 = Number(document.getElementById("i18").value);
    
    if(isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4) || isNaN(v5) || isNaN(v6) || isNaN(v7) || isNaN(v8) || isNaN(v9) || isNaN(v10) || isNaN(v11) || isNaN(v12) || isNaN(v13) || isNaN(v14) || isNaN(v15) || isNaN(v16) || isNaN(v17) || isNaN(v18)){
        return;
    }

    v[0][0] = v1+v10;
    v[0][1] = v2+v11;
    v[0][2] = v3+v12;
    v[1][0] = v4+v13;
    v[1][1] = v5+v14;
    v[1][2] = v6+v15;
    v[2][0] = v7+v16;
    v[2][1] = v8+v17;
    v[2][2] = v9+v18;

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

    document.getElementById("resultado").innerHTML = "";
    
    document.getElementById("resultado").appendChild(tabela);

}

function subTres(){
    let v;
    
    v = [[],[],[]];
    
    let v1;
    let v2;
    let v3;
    let v4;
    let v5;
    let v6;
    let v7;
    let v8;
    let v9;
    let v10;
    let v11;
    let v12;
    let v13;
    let v14;
    let v15;
    let v16;
    let v17;
    let v18;

    v1 = Number(document.getElementById("i1").value);
    v2 = Number(document.getElementById("i2").value);
    v3 = Number(document.getElementById("i3").value);
    v4 = Number(document.getElementById("i4").value);
    v5 = Number(document.getElementById("i5").value);
    v6 = Number(document.getElementById("i6").value);
    v7 = Number(document.getElementById("i7").value);
    v8 = Number(document.getElementById("i8").value);
    v9 = Number(document.getElementById("i9").value);
    v10 = Number(document.getElementById("i10").value);
    v11 = Number(document.getElementById("i11").value);
    v12 = Number(document.getElementById("i12").value);
    v13 = Number(document.getElementById("i13").value);
    v14 = Number(document.getElementById("i14").value);
    v15 = Number(document.getElementById("i15").value);
    v16 = Number(document.getElementById("i16").value);
    v17 = Number(document.getElementById("i17").value);
    v18 = Number(document.getElementById("i18").value);

    if(isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4) || isNaN(v5) || isNaN(v6) || isNaN(v7) || isNaN(v8) || isNaN(v9) || isNaN(v10) || isNaN(v11) || isNaN(v12) || isNaN(v13) || isNaN(v14) || isNaN(v15) || isNaN(v16) || isNaN(v17) || isNaN(v18)){
        return;
    }

    v[0][0] = v1-v10;
    v[0][1] = v2-v11;
    v[0][2] = v3-v12;
    v[1][0] = v4-v13;
    v[1][1] = v5-v14;
    v[1][2] = v6-v15;
    v[2][0] = v7-v16;
    v[2][1] = v8-v17;
    v[2][2] = v9-v18;

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

    document.getElementById("resultado").innerHTML = "";
    
    document.getElementById("resultado").appendChild(tabela);

}

function multTres(){
    let v;
    
    v = [[],[],[]];
    
    let v1;
    let v2;
    let v3;
    let v4;
    let v5;
    let v6;
    let v7;
    let v8;
    let v9;
    let v10;
    let v11;
    let v12;
    let v13;
    let v14;
    let v15;
    let v16;
    let v17;
    let v18;

    v1 = Number(document.getElementById("i1").value);
    v2 = Number(document.getElementById("i2").value);
    v3 = Number(document.getElementById("i3").value);
    v4 = Number(document.getElementById("i4").value);
    v5 = Number(document.getElementById("i5").value);
    v6 = Number(document.getElementById("i6").value);
    v7 = Number(document.getElementById("i7").value);
    v8 = Number(document.getElementById("i8").value);
    v9 = Number(document.getElementById("i9").value);
    v10 = Number(document.getElementById("i10").value);
    v11 = Number(document.getElementById("i11").value);
    v12 = Number(document.getElementById("i12").value);
    v13 = Number(document.getElementById("i13").value);
    v14 = Number(document.getElementById("i14").value);
    v15 = Number(document.getElementById("i15").value);
    v16 = Number(document.getElementById("i16").value);
    v17 = Number(document.getElementById("i17").value);
    v18 = Number(document.getElementById("i18").value);

    if(isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4) || isNaN(v5) || isNaN(v6) || isNaN(v7) || isNaN(v8) || isNaN(v9) || isNaN(v10) || isNaN(v11) || isNaN(v12) || isNaN(v13) || isNaN(v14) || isNaN(v15) || isNaN(v16) || isNaN(v17) || isNaN(v18)){
        return;
    }

    v[0][0] = v1*v10 + v2*v13 + v3*v16;
    v[0][1] = v1*v11 + v2*v14 + v3*v17;
    v[0][2] = v1*v12 + v2*v15 + v3*v18;
    v[1][0] = v4*v10 + v5*v13 + v6*v16;
    v[1][1] = v4*v11 + v5*v14 + v6*v17;
    v[1][2] = v4*v12 + v5*v15 + v6*v18;
    v[2][0] = v7*v10 + v8*v13 + v9*v16;
    v[2][1] = v7*v11 + v8*v14 + v9*v17;
    v[2][2] = v7*v12 + v8*v15 + v9*v18;

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

    document.getElementById("resultado").innerHTML = "";
    
    document.getElementById("resultado").appendChild(tabela);
}