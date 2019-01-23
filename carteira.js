var form = document.querySelector("#form1");

var adiciona_desp = document.querySelector("#adiciona_desp");

adiciona_desp.addEventListener("click", function(event){
    event.preventDefault();
    console.log("me apertaram");

    var sinal = form.myselect.value;
    var descricao = form.description.value;
    var quantia = form.numero.value;

    var tableres = document.querySelector("#table_res");

    var totaltd = tableres.querySelector("#result");

    var total = totaltd.textContent;
    var incometd = document.querySelector("#income");
    var income = incometd.textContent;
    var expensetd = document.querySelector("#expense");
    var expense = expensetd.textContent;

    if(sinal == '+'){
        console.log("Income");
        var incomeTR = document.createElement("tr");
    var indescriTD = document.createElement("td");
    var invalorTD = document.createElement("td");

    indescriTD.textContent = descricao;
    invalorTD.textContent = quantia;

    incomeTR.appendChild(indescriTD);
    incomeTR.appendChild(invalorTD);

    var tablepos = document.querySelector("#tablepos");
    tablepos.appendChild(incomeTR);

    total = +total + +quantia;
    totaltd.textContent = total;

    income = +income + +quantia;
    incometd.textContent = income;
    }

    else if(sinal == '-'){
        console.log("expense");
        var expenseTR = document.createElement("tr");
    var exdescriTD = document.createElement("td");
    var exvalorTD = document.createElement("td");

    exdescriTD.textContent = descricao;
    exvalorTD.textContent = quantia;

    expenseTR.appendChild(exdescriTD);
    expenseTR.appendChild(exvalorTD);
    
    var tableneg = document.querySelector("#tableneg");

    tableneg.appendChild(expenseTR);

    total = +total + -quantia;
    totaltd.textContent = total;
   
    expense = +expense + +quantia;
    expensetd.textContent = expense;

    }
})
