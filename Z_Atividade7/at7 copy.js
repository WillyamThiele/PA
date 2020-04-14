/*Construa um algoritmo que leia cinco números inteiros e identifique qual é o maior e qual é o menor.*/

var maior=0
var menor=0
var x1 = prompt("valor 1" );
    x1 = parseFloat(x1);
var x2 = prompt("valor 2" );
    x2 = parseFloat(x2);
var x3 = prompt("valor 3" );
    x3 = parseFloat(x3);
var x4 = prompt("valor 4" );
    x4 = parseFloat(x4);
var x5 = prompt("valor 5" );
    x5 = parseFloat(x5);


if( x1 > x2)
   { if( x1 > x3)
        { if( x1 > x4)
            { if( x1 > x5)
                {maior= x1}
                /*numero maior 1-1-1*/
      
            } 
        else
            { if( x4 > x5)
                
                    {maior= x4 }/*numero maior 1-4-4*/

            else {maior= x5}/*numero maior 1-4-5*/

            } 
            
        }
    else
        { if( x3 > x4)
            { if( x3 > x5)

                 {maior= x3}/*numero maior 1-3-3*/

            }
        else
            { if( x4 > x5)
    
                {maior= x4 }/*numero maior 1-3-4*/

            else {maior= x5}/*numero maior 1-3-5*/

            }
                    
                    
        }
   }
else
    {if( x2 > x3)
        { if( x2 > x4)
            { if( x2 > x5)

                 { maior=x2 }/*numero maior 2-2-2*/

        else
            { if( x3 > x4)
                { if( x3 > x5)

                    {maior= x3}/*numero maior 2-3-3*/
     
                }
                 else
                     { if( x4 > x5)
             
                        {maior= x4 }/*numero maior 2-3-4*/
     
                     else {maior= x5}/*numero maior 2-3-5*/
     
                             
                 }}         
            }
        else
            { if( x3 > x4)
                { if( x3 > x5)
    
                    {maior= x3}/*numero maior 3-3-3*/
                
                else {maior= x5}/*numero maior 3-5-5*/
     
                }
            else
                { if( x4 > x5)
        
                    {maior= x4 }/*numero maior 3-4-4*/

                else {maior= x5}/*numero maior 3-4-5*/
                }       
            }   
        } 
        else
            { if( x4 > x5)
        
                {maior= x4 }/*numero maior 4-4-4 */

            else {maior= x5}/*numero maior 4-4-5*/

            }  
    }
  /* menor---------------------------------------------------------------- */      
       
  if( x1 < x2)
  { if( x1 < x3)
       { if( x1 < x4)
           { if( x1 < x5)
               {menor= x1}
               /*numero menor 1-1-1*/
     
           } 
       else
           { if( x4 < x5)
               
                   {menor= x4 }/*numero menor 1-4-4*/

           else {menor= x5}/*numero menor 1-4-5*/

           } 
           
       }
   else
       { if( x3 < x4)
           { if( x3 < x5)

                {menor= x3}/*numero menor 1-3-3*/

           }
       else
           { if( x4 < x5)
   
               {menor= x4 }/*numero menor 1-3-4*/

           else {mmenor= x5}/*numero menor 1-3-5*/

           }
                   
                   
       }
  }
else
   {if( x2 < x3)
       { if( x2 < x4)
           { if( x2 < x5)

                {menor= x2 }/*numero menor 2-2-2*/

       else
           { if( x3 < x4)
               { if( x3 < x5)

                   {menor= x3}/*numero menor 2-3-3*/
    
               }
                else
                    { if( x4 < x5)
            
                       {menor= x4 }/*numero menor 2-3-4*/
    
                    else {menor= x5}/*numero menor 2-3-5*/
    
                            
                }}         
           }
       else
           { if( x3 < x4)
               { if( x3 < x5)
   
                   {menor= x3}/*numero menor 3-3-3*/
               
               else {menor= x5}/*numero maior 3-5-5*/
    
               }
           else
               { if( x4 < x5)
       
                   {menor= x4 }/*numero menor 3-4-4*/

               else {menor= x5}/*numero menor 3-4-5*/
               }       
           }   
       } 
       else
           { if( x4 < x5)
       
               {menor= x4 }/*numero menor 4-4-4 */

           else {menor= x5}/*numero menor 4-4-5*/

           }  
   }            
           
    

alert("O maior numero é " + maior + " O menor numero é " + menor)



