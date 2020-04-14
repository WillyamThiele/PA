/*9) Crie um algoritmo que receba votos enquanto o usuário desejar, dos candidatos A, B e C.
 Ao final da votação, apresente quantos votos cada candidato recebeu, e qual está eleito. Caso de empate,
a eleição irá para o segundo turno.*/


while (confirm('Deseja continuar? ') === true) {
    alert("Aguarde um minuto...");

    var a = 0;
    var b = 0;
    var c = 0;

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    var candidato = prompt("Em qual candidato deseja votar: (a, b ou c ) ?")

    if (candidato === "a") {
        a = a + 1;
    } else {
        if (candidato === "b") {
            b = b + 1;
        } else {
            if (candidato === "c") {
                c = c + 1;
            }
        }
    } if ( a > b && a > c){
        alert ( " O vencedor é o candidato A, com um total de: " + a + " votos!");
    } else {
        if ( b > a && b > c) {
            alert (" O vencedor é o candidato B, com um total de: " + b + " votos!");
        } else {
            if ( c > a && c > b){
                alert ( " O vencedor é o candidato C, com um total de: " + c + " votos!")
            }else {
                if ( a === b || a === c || c === b || c === b === a){
                    alert ("Houve empate, as eleições irão para o segundo turno.");
                }
            }
        }
    }
}
