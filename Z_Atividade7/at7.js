/*Construa um algoritmo que leia cinco números inteiros e identifique qual é o maior e qual é o menor.*/
var numero=0
var maior=-99999999
var menor=99999999

for (var i=1; i <=5; i++){
     numero = prompt("Nota "+ i);
     numero= parseFloat(numero);
    if(numero > maior)
        {maior = numero};

    if( numero < menor )
    {menor = numero};

}

alert("O maior numero é " + maior + " O menor numero é " + menor)



