
alert("vamos calcular");
var nub1 = prompt("numero 01");
var nub2 = prompt("numero 02");
nub1 = parseFloat(nub1);
nub2 = parseFloat(nub2);

if(confirm("Deseja somar?:") === true)
    {alert("Soma :"+ nub1 + " + " + nub2 + " = "  + ( nub1 + nub2))}
else
    if(confirm("Deseja subitrair?:") === true)
        {alert("subitrair :"+ nub1 + " - " + nub2 + " = "  + ( nub1 - nub2))}
     else
        if(confirm("Deseja dividir?:") === true)
        {alert("dividir :"+ nub1 + " / " + nub2 + " = "  + ( nub1 / nub2))}
            else
                if(confirm("Deseja multiplicar?:") === true)
                    {alert("multiplicaç~çao :"+ nub1 + " * " + nub2 + " = "  + ( nub1 * nub2))}