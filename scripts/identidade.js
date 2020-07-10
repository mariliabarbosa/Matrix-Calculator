function idDois(){
    let v = [[],[]];

    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 2; j++){
            if(i == 0 && j == 0 || i == 1 && j == 1){
                v[i][j] = 1;
            } else {
               v[i][j] = 0;
            }
        }
    }

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

function idTres(){
    let v = [[],[],[]];
    
    let i = 0;
    
    while(i < 3){
        for(let j = 0; j < 3; j++){
            if(i == 0 && j == 0 || i == 1 && j == 1 || i == 2 && j == 2){
                v[i][j] = 1;
            } else {
                v[i][j] = 0;
            }
        }
        i++
    }
    

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