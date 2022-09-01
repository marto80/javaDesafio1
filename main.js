let goleador = prompt ('Decí el apodo del goleador de Italia 1990: ¿Toto, Titi o Tutu?').toUpperCase();

while (goleador != 'LISTO') {
       switch(goleador){
              case 'TOTO':
                     alert ('Adivinaste! es el Toto Shilachi');
                     break;
              case 'TITI':
                     alert ('Titi no es el nombre');
                     break;
              case 'TUTU':
                     alert ('Tutu no es correcta');
                     break;
             default:
                     alert ('Pusiste cualquier cosa. Las opciones son ¿Toto, Titi o Tutu?');
                     break;
       }

   goleador = prompt ('Jugá otra vez: ¿Toto, Titi o Tutu? o poné LISTO para terminar').toUpperCase();
}