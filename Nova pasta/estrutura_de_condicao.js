var x=10;
var y=5;


/*


if (x > y){//Bloco de codico que e executado somente se a condição for verdadeira
alert( "X é maior do que Y")}

y = y +10

if(x > y)
{alert("X é maior que Y")}
else// else = se não 
{ alert("X é menor ou igual a Y")};
//* quando queromeos saber o tamnho de um testo utilizamos a função "length"*/   


var nome = prompt("escreva seu nome");
if(nome.length > 10)//carater de nome
    {alert("Seu nome é bem Extenso...")}
else
    {alert("seu nome é curto...")}

alert('seu nome tem '+ nome.length + ' letras');


//quando quermos pedir uma confimação para o ussuario, utilizamos o confirm
if(confirm("Deseja salvar?:") === true)
    {alert("VocÊ salvou os dados")}
else
    {alert("voce cancelou a operção.")};


