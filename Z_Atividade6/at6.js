/*Construa um algoritmo que calcule a média final de alunos enquanto o usuário desejar, baseado em um número
 X de provas realizadas, além disso pergunte ao usuário o nome do aluno, e sua frequência nas aulas. 

Apresente na tela seu nome, sua média final, se foi aprovado, reprovado ou está em exame. 
Para o aluno ser aprovado ele deve ter média igual ou superior a 7 e frequência igual ou superior a 
75%. Caso ele tenha média final entre 3 e 7 e frequência igual ou superior a 75% ele estará em exame.
 Caso ele não atinja 3 na média final ou não atinja 75% de frequência ele estará reprovado.*/





if(confirm("Deseja Calcular a media") === true)
    {
    var nome_a = prompt("Nome do aluno");
    var frequência = prompt("Frequência do aluno");
        frequência = parseFloat(frequência)
    var n_notas = prompt("Numero de notas");
        n_notas = parseFloat(n_notas);
    var media = 0;
             
    for (var i = 1 ; i<=n_notas; i++)
        { 
        var notas = prompt("nota " + i );
        notas = parseFloat(notas);
        media = media + notas;
        alert("Procima");
        }
    
    media = media/n_notas
    
    if( frequência < 75 )
        {alert("media do aluno "+">" + nome_a +">" + media + " Reprovado frequecia de : "+ frequência+"%"); }
     else
        if(media >= 7 )
            {alert("media do aluno "+">" + nome_a +">" + media + " Aprovado frequecia de : "+ frequência+"%");}
        else
            if (media > 3)
                 {alert("media do aluno "+">" + nome_a +">" + media + " Recuperação frequecia de : "+ frequência+"%");}
            else
                 { alert("media do aluno "+">" + nome_a +">" +  "é de: " + media + " Reprovado frequecia de : "+ frequência +"%" )};
    
    alert(Comcluido)
    }
else
    {alert("Até aprocima ☻ ")};

    


 