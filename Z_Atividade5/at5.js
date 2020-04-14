/*a serie de fibonacci é forma pela sequencia, 1,1,2,3,5,8,13,21,34,55,..

construa um algoritimo que gera a serie de fibonacci até o vigesimo termo.*/

var y = 1;
var x = 1;
var r = 0;

/*
for (var i=1; i <= 20; i++){
  r = x + y;
   
if( y > x){
        x = r;
       
         }
else{
        y = r;
    
    }
alert("  Y  = " + y  +' x ' + x);
}
*/

for (var i=1; i <= 20; i++){
    alert("  Y  = " + y  +' x ' + x);
    r = x + y;
    y = x ;
    x = r ;
}
