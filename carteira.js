
var inatual, exatual, val, signal, sum, minus, tex, sumover, sumdown, p;

function Ler() {
  signal= document.getElementById("myselect").value;
  inatual= parseFloat(document.getElementById("entra").innerText);
  val=document.getElementById("numero").value;
  exatual= parseFloat(document.getElementById("sai").innerText);
  tex= document.getElementById("description").value;
  Percentage();
    if (signal=== "+"){
    income();
      NewRowLeft();
   }
  else if (signal==="-"){
    expenses();
    NewRowRight();
   
}
}

function income(){
  
  sum= parseFloat(inatual) + parseFloat(val);
  document.getElementById("entra").innerHTML= sum;
  total();
}

function expenses(){
  
  minus= parseFloat(exatual) - parseFloat(val);
  document.getElementById("sai").innerHTML= minus;
 total();
}


function total(){
  var a,b, result;
  a=parseFloat(document.getElementById("entra").innerText)
  b= parseFloat(document.getElementById("sai").innerText)
  result= a + b;
  document.getElementById("result").innerHTML=result;
}

function NewRowLeft(){
  var table, row, newcell0, newcell1;
  table= document.getElementById("tabledown");
  row= table.insertRow(1);
  newcell0= row.insertCell(0);
  newcell1= row.insertCell(1);
  newcell0.innerHTML= tex;
  newcell1.innerHTML=(parseFloat(inatual) + parseFloat(val));
}

function NewRowRight(){
  var table, row, newcell0, newcell1, newcell2;
  table= document.getElementById("neg");
  row= table.insertRow(1);
  newcell0= row.insertCell(0);
  newcell1= row.insertCell(1);
  newcell2= row.insertCell(2);
  newcell0.innerHTML=tex
  newcell1.innerHTML=(parseFloat(exatual) - parseFloat(val));
  newcell2.innerHTML= p + "%";
}

function Percentage(){
  
  if(signal ==="-"){
  sumover= parseFloat(val) + parseFloat(document.getElementById("sai").innerText);
  sumdown= parseFloat(document.getElementById("entra").innerText); 
  p= (sumover/sumdown) * 100;}
  
  if(signal ==="+"){
    sumover= parseFloat(document.getElementById("sai").innerText);
  sumdown=  parseFloat(val) + parseFloat(document.getElementById("entra").innerText); 
  p= (sumover/sumdown) * 100;
  }
  document.getElementById("percentage").innerHTML= p + "%";
  }

function data(){
 const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  
  var y= new Date();
 document.getElementById("data").innerHTML= monthNames[y.getMonth()] + String(y.getFullYear()); 
}
