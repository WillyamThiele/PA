/* dada a formula: H=1 + 1/2 + 1/3 + 1/4 ... 1/N
 construa um algoritimo que o numero H, dado o numero inteiro N.*/


var h = 0;
var n = prompt("valor");
n = parseFloat(n);
for (var i=1; i <= n; i++){
    h = h + 1/i
}

alert("H =" + h);