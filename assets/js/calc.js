function calc(){
 var S = document.getElementById("S").value - 0;
 var p = document.getElementById("p").value - 0;
 var n = document.getElementById("n").value - 0;
 
 if(
  typeof S != "number" ||
  typeof p != "number" ||
  typeof n != "number" 
 ) return false;
 
 p = p / 1200; 
 n = n * 12; 
 
 document.getElementById("result").innerHTML =  (S * p / (1 - Math.pow(1 + p, -n))).toFixed(2); 
}
