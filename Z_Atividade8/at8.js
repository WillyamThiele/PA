
/*8) Um endocrinologista deseja controlar a saúde de seus pacientes e, para isso, utiliza a fórmula do Índice de Massa Corporal (IMC).

Sabendo que o IMC é calculado por meio da seguinte fórmula: 

IMC =  peso/altura²

 

Onde: peso é dado em Kg

altura é dada em metros

 

Elabore um algoritmo que apresente o nome do paciente e sua faixa de risco, baseando-se na seguinte tabela:

IMC                      FAIXA DE RISCO

Abaixo de 20                   Abaixo do peso

A partir de 20 até 25       Normal

Acima de 25 até 30         Excesso de peso

Acima de 30 até 35         Obesidade

Acima de 35                    Obesida Mórbida
*/

var altura=0
var peso=0
var IMC=0

var nome= prompt("Nome do paciente");

peso= prompt("Peso em Kg");
peso= parseFloat(peso);

altura= prompt("Altura em Metros");
altura= parseFloat(altura);


IMC = peso / (altura**2);
alert(altura);
alert(peso);
alert(IMC);

if( IMC < 20 )
        {alert("Paciente "+ nome +" Abaixo do peso"); }
     else
        if(IMC <25 )
            {alert("Paciente "+ nome + " Normal");}
        else
            if (IMC < 30)
                 {alert("Paciente "+ nome +" Excesso de peso");}
            else
                if (IMC < 35)
                    {alert("Paciente "+ nome + " Obesidade");}
                else
                    if (IMC > 35)
                        {alert("Paciente "+ nome + " Obesida Mórbida");}




  

