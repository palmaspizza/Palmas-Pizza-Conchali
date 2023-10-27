// POLLO BBQ



function cambiarcolorfamiliarpollobbq(){
  document.getElementById("familiarpollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarpollobbq").style.color = "#fff"
  document.getElementById("familiarpollobbq").style.fontSize = "170%"
  document.getElementById("medianapollobbq").style.background = "#fff"
  document.getElementById("medianapollobbq").style.color = "#ff7700"
  document.getElementById("medianapollobbq").style.fontSize = "150%"
  document.getElementById("input-pollobbq-tamaño").value = 'FAMILIARES';

}

function cambiarcolormedianapollobbq(){
  document.getElementById("medianapollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianapollobbq").style.color = "#fff"
  document.getElementById("medianapollobbq").style.fontSize = "170%"
  document.getElementById("familiarpollobbq").style.background = "#fff"
  document.getElementById("familiarpollobbq").style.color = "#ff7700"
  document.getElementById("familiarpollobbq").style.fontSize = "150%"
  document.getElementById("input-pollobbq-tamaño").value = 'MEDIANAS';
}



function cambiarcolorsalsapizzapollobbq(){
  document.getElementById("salsapizzapollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzapollobbq").style.color = "#fff"
  document.getElementById("salsapizzapollobbq").style.fontSize = "170%"
  document.getElementById("salsabbqpollobbq").style.background = "#fff"
  document.getElementById("salsabbqpollobbq").style.color = "#ff7700"
  document.getElementById("salsabbqpollobbq").style.fontSize = "150%"

}

function cambiarcolorsalsabbqpollobbq(){
  document.getElementById("salsabbqpollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqpollobbq").style.color = "#fff"
  document.getElementById("salsabbqpollobbq").style.fontSize = "170%"
  document.getElementById("salsapizzapollobbq").style.background = "#fff"
  document.getElementById("salsapizzapollobbq").style.color = "#ff7700"
  document.getElementById("salsapizzapollobbq").style.fontSize = "150%"
}








function cambiarcolormasatradicionalpollobbq(){
  document.getElementById("masadelgadapollobbq").style.background = "#fff"
  document.getElementById("masadelgadapollobbq").style.color = "#ff7700"
  document.getElementById("masadelgadapollobbq").style.fontSize = "150%"
  document.getElementById("masatradicionalpollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalpollobbq").style.color = "#fff"
  document.getElementById("masatradicionalpollobbq").style.fontSize = "170%"
  document.getElementById("input-pollobbq-masa").value = 'MASA TRADICIONAL';
}

function cambiarcolormasadelgadapollobbq(){
  document.getElementById("masatradicionalpollobbq").style.background = "#fff"
  document.getElementById("masatradicionalpollobbq").style.color = "#ff7700"
  document.getElementById("masatradicionalpollobbq").style.fontSize = "150%"
  document.getElementById("masadelgadapollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadapollobbq").style.color = "#fff"
  document.getElementById("masadelgadapollobbq").style.fontSize = "170%"
  document.getElementById("input-pollobbq-masa").value = 'MASA DELGADA';
}


function pollobbqmedianasx() {
  document.getElementById("input-pollobbq-precio").value = '$6.000';
  document.getElementById("input-pollobbq-cantidad").value = '1';
  document.getElementById("input-pollobbq-tamaño").value = 'MEDIANA';
  document.getElementById("input-pollobbq-pizza").value = 'POLLO BBQ';
  
  }


function pollobbqmedianas() {
document.getElementById("input-pollobbq-precio").value = '$8.990';
document.getElementById("input-pollobbq-cantidad").value = '1';
document.getElementById("input-pollobbq-tamaño").value = 'MEDIANA';
document.getElementById("input-pollobbq-pizza").value = 'POLLO BBQ';

}

function pollobbqmedianasdos() {
document.getElementById("input-pollobbq-precio").value = '$14.990';
document.getElementById("input-pollobbq-cantidad").value = '2';


}

function pollobbqmedianastres() {
document.getElementById("input-pollobbq-precio").value = '$23.980';
document.getElementById("input-pollobbq-cantidad").value = '3';

}

function pollobbqmedianascuatro() {
document.getElementById("input-pollobbq-precio").value = '$29.980';
document.getElementById("input-pollobbq-cantidad").value = '4';

}


function pollobbqfamiliaresx() {
  document.getElementById("input-pollobbq-precio").value = '$7.000';
  document.getElementById("input-pollobbq-cantidad").value = '1';
  document.getElementById("input-pollobbq-tamaño").value = 'FAMILIAR';
  document.getElementById("input-pollobbq-pizza").value = 'POLLO BBQ';
  }



function pollobbqfamiliares() {
document.getElementById("input-pollobbq-precio").value = '$10.990';
document.getElementById("input-pollobbq-cantidad").value = '1';
document.getElementById("input-pollobbq-tamaño").value = 'FAMILIAR';
document.getElementById("input-pollobbq-pizza").value = 'POLLO BBQ';
}

function pollobbqfamiliaresdos() {
document.getElementById("input-pollobbq-precio").value = '$17.990';
document.getElementById("input-pollobbq-cantidad").value = '2';
}

function pollobbqfamiliarestres() {
document.getElementById("input-pollobbq-precio").value = '$28.990';
document.getElementById("input-pollobbq-cantidad").value = '3';
}

function pollobbqfamiliarescuatro() {
document.getElementById("input-pollobbq-precio").value = '$35.980';
document.getElementById("input-pollobbq-cantidad").value = '4';
}



function pollobbqpizza() {
  document.getElementById("input-pollobbq-pizza").value = 'POLLO BBQS';
  document.getElementById("volver-pollobbq-html").hidden = true; 
  }



  function borrarpedidopollobbq() {
    document.getElementById("input-pollobbq-pizza").value = '';
    document.getElementById("input-pollobbq-tamaño").value = '';
    document.getElementById("input-pollobbq-cantidad").value = '';
    document.getElementById("input-pollobbq-precio").value = '';
    document.getElementById("input-pollobbq-masa").value = '';
    document.getElementById("inputs-pollobbq").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-pollobbq").hidden = true; 
    }










    function agregaralpedidopollobbqx() {
      document.getElementById("inputs-pollobbq").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-pollobbq").value;
      document.getElementById("input-pollobbq-instrucciones").value= nota;
      document.getElementById("volver-pollobbq-html").hidden = true; 



      // Pollo BBQ
      document.getElementById("finalizarpedido-pollobbq").hidden = false; 
      document.getElementById("finalizarpedido-pollobbqx").hidden = true;
      document.getElementById("1pollobbqmedianas").hidden = false;
      document.getElementById("1pollobbqfamiliares").hidden = false;
      document.getElementById("1pollobbqmedianasx").hidden = true;
      document.getElementById("1pollobbqfamiliaresx").hidden = true;

 

      // Hawaiana
      document.getElementById("finalizarpedido-hawaiana").hidden = false; 
      document.getElementById("finalizarpedido-hawaianax").hidden = true;
      document.getElementById("1hawaianamedianas").hidden = false;
      document.getElementById("1hawaianafamiliares").hidden = false;
      document.getElementById("1hawaianamedianasx").hidden = true;
      document.getElementById("1hawaianafamiliaresx").hidden = true;


  
      // Napolitana
      document.getElementById("finalizarpedido-napolitana").hidden = false; 
      document.getElementById("finalizarpedido-napolitanax").hidden = true;
      document.getElementById("1napolitanamedianas").hidden = false;
      document.getElementById("1napolitanafamiliares").hidden = false;
      document.getElementById("1napolitanamedianasx").hidden = true;
      document.getElementById("1napolitanafamiliaresx").hidden = true;


       // Vegetariana
       document.getElementById("finalizarpedido-vegetariana").hidden = false; 
       document.getElementById("finalizarpedido-vegetarianax").hidden = true;
       document.getElementById("1vegetarianamedianas").hidden = false;
       document.getElementById("1vegetarianafamiliares").hidden = false;
       document.getElementById("1vegetarianamedianasx").hidden = true;
       document.getElementById("1vegetarianafamiliaresx").hidden = true;


        // Pollo BBQ
      document.getElementById("finalizarpedido-pollobbq").hidden = false; 
      document.getElementById("finalizarpedido-pollobbqx").hidden = true;
      document.getElementById("1pollobbqmedianas").hidden = false;
      document.getElementById("1pollobbqfamiliares").hidden = false;
      document.getElementById("1pollobbqmedianasx").hidden = true;
      document.getElementById("1pollobbqfamiliaresx").hidden = true;




      // Luco Pizza
      document.getElementById("finalizarpedido-lucopizza").hidden = false; 
      document.getElementById("finalizarpedido-lucopizzax").hidden = true;
      document.getElementById("1lucopizzamedianas").hidden = false;
      document.getElementById("1lucopizzafamiliares").hidden = false;
      document.getElementById("1lucopizzamedianasx").hidden = true;
      document.getElementById("1lucopizzafamiliaresx").hidden = true;


      

  
      // Chillian
      document.getElementById("finalizarpedido-chillian").hidden = false; 
      document.getElementById("finalizarpedido-chillianx").hidden = true;
      document.getElementById("1chillianmedianas").hidden = false;
      document.getElementById("1chillianfamiliares").hidden = false;
      document.getElementById("1chillianmedianasx").hidden = true;
      document.getElementById("1chillianfamiliaresx").hidden = true;





      // Super Pepperoni
      document.getElementById("finalizarpedido-superpepperoni").hidden = false; 
      document.getElementById("finalizarpedido-superpepperonix").hidden = true;
      document.getElementById("1superpepperonimedianas").hidden = false;
      document.getElementById("1superpepperonifamiliares").hidden = false;
      document.getElementById("1superpepperonimedianasx").hidden = true;
      document.getElementById("1superpepperonifamiliaresx").hidden = true;

      

  // This.Pizza
      document.getElementById("1pollobbqmedianas").hidden = true;
      document.getElementById("1pollobbqfamiliares").hidden = true;






      document.getElementById("audio");
      audio.play();
      
      setTimeout(() => {
        alert("Puedes ver y completar tu pedido en el carrito de compras en la parte superior");
      }, "1000");


      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "2000");
      
      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "2500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "3000");
      
      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "3500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "4000");

      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "4500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "5000");


      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "5500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "6000");

    }





    




    function agregaralpedidopollobbq() {
      document.getElementById("inputs-pollobbq").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-pollobbq").value;
      document.getElementById("input-pollobbq-instrucciones").value= nota;
      document.getElementById("volver-pollobbq-html").hidden = true; 

           // Pollo BBQ
           document.getElementById("finalizarpedido-pollobbq").hidden = true; 
           document.getElementById("finalizarpedido-pollobbqx").hidden = false;
           document.getElementById("1pollobbqmedianas").hidden = true;
           document.getElementById("1pollobbqfamiliares").hidden = true;
           document.getElementById("1pollobbqmedianasx").hidden = false;
           document.getElementById("1pollobbqfamiliaresx").hidden = false;
     
      
     
           // Hawaiana
           document.getElementById("finalizarpedido-hawaiana").hidden = true; 
           document.getElementById("finalizarpedido-hawaianax").hidden = false;
           document.getElementById("1hawaianamedianas").hidden = true;
           document.getElementById("1hawaianafamiliares").hidden = true;
           document.getElementById("1hawaianamedianasx").hidden = false;
           document.getElementById("1hawaianafamiliaresx").hidden = false;
     
     
       
           // Napolitana
           document.getElementById("finalizarpedido-napolitana").hidden = true; 
           document.getElementById("finalizarpedido-napolitanax").hidden = false;
           document.getElementById("1napolitanamedianas").hidden = true;
           document.getElementById("1napolitanafamiliares").hidden = true;
           document.getElementById("1napolitanamedianasx").hidden = false;
           document.getElementById("1napolitanafamiliaresx").hidden = false;
     
     
            // Vegetariana
            document.getElementById("finalizarpedido-vegetariana").hidden = true; 
            document.getElementById("finalizarpedido-vegetarianax").hidden = false;
            document.getElementById("1vegetarianamedianas").hidden = true;
            document.getElementById("1vegetarianafamiliares").hidden = true;
            document.getElementById("1vegetarianamedianasx").hidden = false;
            document.getElementById("1vegetarianafamiliaresx").hidden = false;
     
     
             // Italiana
           document.getElementById("finalizarpedido-italiana").hidden = true; 
           document.getElementById("finalizarpedido-italianax").hidden = false;
           document.getElementById("1italianamedianas").hidden = true;
           document.getElementById("1italianafamiliares").hidden = true;
           document.getElementById("1italianamedianasx").hidden = false;
           document.getElementById("1italianafamiliaresx").hidden = false;
     
     
     
     
           // Luco Pizza
           document.getElementById("finalizarpedido-lucopizza").hidden = true; 
           document.getElementById("finalizarpedido-lucopizzax").hidden = false;
           document.getElementById("1lucopizzamedianas").hidden = true;
           document.getElementById("1lucopizzafamiliares").hidden = true;
           document.getElementById("1lucopizzamedianasx").hidden = false;
           document.getElementById("1lucopizzafamiliaresx").hidden = false;
     
     
           
     
       
           // Chillian
           document.getElementById("finalizarpedido-chillian").hidden = true; 
           document.getElementById("finalizarpedido-chillianx").hidden = false;
           document.getElementById("1chillianmedianas").hidden = true;
           document.getElementById("1chillianfamiliares").hidden = true;
           document.getElementById("1chillianmedianasx").hidden = false;
           document.getElementById("1chillianfamiliaresx").hidden = false;
     
     
     
     
     
           // Super Pepperoni
           document.getElementById("finalizarpedido-superpepperoni").hidden = true; 
           document.getElementById("finalizarpedido-superpepperonix").hidden = false;
           document.getElementById("1superpepperonimedianas").hidden = true;
           document.getElementById("1superpepperonifamiliares").hidden = true;
           document.getElementById("1superpepperonimedianasx").hidden = false;
           document.getElementById("1superpepperonifamiliaresx").hidden = false;
     
           
     
       // This.Pizza
           document.getElementById("1pollobbqmedianas").hidden = false;
           document.getElementById("1pollobbqfamiliares").hidden = false;

      document.getElementById("audio");
      audio.play();
      
      setTimeout(() => {
        alert("Puedes ver y completar tu pedido en el carrito de compras en la parte superior");
      }, "1000");


      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "2000");
      
      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "2500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "3000");
      
      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "3500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "4000");

      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "4500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "5000");


      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "5500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "6000");

    }



      

    function volverpollobbq() {
      document.getElementById("volver-pollobbq-html").hidden = false; 
    }

    // FIN POLLO BBQ 


    




























