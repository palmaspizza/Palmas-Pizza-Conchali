// Luco Pizza



function cambiarcolorfamiliarlucopizza(){
  document.getElementById("familiarlucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarlucopizza").style.color = "#fff"
  document.getElementById("familiarlucopizza").style.fontSize = "170%"
  document.getElementById("medianalucopizza").style.background = "#fff"
  document.getElementById("medianalucopizza").style.color = "#ff7700"
  document.getElementById("medianalucopizza").style.fontSize = "150%"
  document.getElementById("input-lucopizza-tamaño").value = 'FAMILIARES';

}

function cambiarcolormedianalucopizza(){
  document.getElementById("medianalucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianalucopizza").style.color = "#fff"
  document.getElementById("medianalucopizza").style.fontSize = "170%"
  document.getElementById("familiarlucopizza").style.background = "#fff"
  document.getElementById("familiarlucopizza").style.color = "#ff7700"
  document.getElementById("familiarlucopizza").style.fontSize = "150%"
  document.getElementById("input-lucopizza-tamaño").value = 'MEDIANAS';
}



function cambiarcolorsalsapizzalucopizza(){
  document.getElementById("salsapizzalucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzalucopizza").style.color = "#fff"
  document.getElementById("salsapizzalucopizza").style.fontSize = "170%"
  document.getElementById("salsabbqlucopizza").style.background = "#fff"
  document.getElementById("salsabbqlucopizza").style.color = "#ff7700"
  document.getElementById("salsabbqlucopizza").style.fontSize = "150%"

}

function cambiarcolorsalsabbqlucopizza(){
  document.getElementById("salsabbqlucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqlucopizza").style.color = "#fff"
  document.getElementById("salsabbqlucopizza").style.fontSize = "170%"
  document.getElementById("salsapizzalucopizza").style.background = "#fff"
  document.getElementById("salsapizzalucopizza").style.color = "#ff7700"
  document.getElementById("salsapizzalucopizza").style.fontSize = "150%"
}








function cambiarcolormasatradicionallucopizza(){
  document.getElementById("masadelgadalucopizza").style.background = "#fff"
  document.getElementById("masadelgadalucopizza").style.color = "#ff7700"
  document.getElementById("masadelgadalucopizza").style.fontSize = "150%"
  document.getElementById("masatradicionallucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionallucopizza").style.color = "#fff"
  document.getElementById("masatradicionallucopizza").style.fontSize = "170%"
  document.getElementById("input-lucopizza-masa").value = 'MASA TRADICIONAL';
}

function cambiarcolormasadelgadalucopizza(){
  document.getElementById("masatradicionallucopizza").style.background = "#fff"
  document.getElementById("masatradicionallucopizza").style.color = "#ff7700"
  document.getElementById("masatradicionallucopizza").style.fontSize = "150%"
  document.getElementById("masadelgadalucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadalucopizza").style.color = "#fff"
  document.getElementById("masadelgadalucopizza").style.fontSize = "170%"
  document.getElementById("input-lucopizza-masa").value = 'MASA DELGADA';
}


function lucopizzamedianasx() {
  document.getElementById("input-lucopizza-precio").value = '$6.000';
  document.getElementById("input-lucopizza-cantidad").value = '1';
  document.getElementById("input-lucopizza-tamaño").value = 'MEDIANA';
  document.getElementById("input-lucopizza-pizza").value = 'Luco Pizza';
  
  }


function lucopizzamedianas() {
document.getElementById("input-lucopizza-precio").value = '$8.990';
document.getElementById("input-lucopizza-cantidad").value = '1';
document.getElementById("input-lucopizza-tamaño").value = 'MEDIANA';
document.getElementById("input-lucopizza-pizza").value = 'Luco Pizza';

}

function lucopizzamedianasdos() {
document.getElementById("input-lucopizza-precio").value = '$14.990';
document.getElementById("input-lucopizza-cantidad").value = '2';


}

function lucopizzamedianastres() {
document.getElementById("input-lucopizza-precio").value = '$23.980';
document.getElementById("input-lucopizza-cantidad").value = '3';

}

function lucopizzamedianascuatro() {
document.getElementById("input-lucopizza-precio").value = '$29.980';
document.getElementById("input-lucopizza-cantidad").value = '4';

}


function lucopizzafamiliaresx() {
  document.getElementById("input-lucopizza-precio").value = '$7.000';
  document.getElementById("input-lucopizza-cantidad").value = '1';
  document.getElementById("input-lucopizza-tamaño").value = 'FAMILIAR';
  document.getElementById("input-lucopizza-pizza").value = 'Luco Pizza';
  }



function lucopizzafamiliares() {
document.getElementById("input-lucopizza-precio").value = '$10.990';
document.getElementById("input-lucopizza-cantidad").value = '1';
document.getElementById("input-lucopizza-tamaño").value = 'FAMILIAR';
document.getElementById("input-lucopizza-pizza").value = 'Luco Pizza';
}

function lucopizzafamiliaresdos() {
document.getElementById("input-lucopizza-precio").value = '$17.990';
document.getElementById("input-lucopizza-cantidad").value = '2';
}

function lucopizzafamiliarestres() {
document.getElementById("input-lucopizza-precio").value = '$28.990';
document.getElementById("input-lucopizza-cantidad").value = '3';
}

function lucopizzafamiliarescuatro() {
document.getElementById("input-lucopizza-precio").value = '$35.980';
document.getElementById("input-lucopizza-cantidad").value = '4';
}



function lucopizzapizza() {
  document.getElementById("input-lucopizza-pizza").value = 'Luco PizzaS';
  document.getElementById("volver-lucopizza-html").hidden = true; 
  }



  function borrarpedidolucopizza() {
    document.getElementById("input-lucopizza-pizza").value = '';
    document.getElementById("input-lucopizza-tamaño").value = '';
    document.getElementById("input-lucopizza-cantidad").value = '';
    document.getElementById("input-lucopizza-precio").value = '';
    document.getElementById("input-lucopizza-masa").value = '';
    document.getElementById("inputs-lucopizza").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-lucopizza").hidden = true; 
    }










    function agregaralpedidolucopizzax() {
      document.getElementById("inputs-lucopizza").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-lucopizza").value;
      document.getElementById("input-lucopizza-instrucciones").value= nota;
      document.getElementById("volver-lucopizza-html").hidden = true; 



      // Luco Pizza
      document.getElementById("finalizarpedido-lucopizza").hidden = false; 
      document.getElementById("finalizarpedido-lucopizzax").hidden = true;
      document.getElementById("1lucopizzamedianas").hidden = false;
      document.getElementById("1lucopizzafamiliares").hidden = false;
      document.getElementById("1lucopizzamedianasx").hidden = true;
      document.getElementById("1lucopizzafamiliaresx").hidden = true;

 

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


       // Italiana
       document.getElementById("finalizarpedido-italiana").hidden = false; 
       document.getElementById("finalizarpedido-italianax").hidden = true;
       document.getElementById("1italianamedianas").hidden = false;
       document.getElementById("1italianafamiliares").hidden = false;
       document.getElementById("1italianamedianasx").hidden = true;
       document.getElementById("1italianafamiliaresx").hidden = true;


        // Pollo BBQ
      document.getElementById("finalizarpedido-pollobbq").hidden = false; 
      document.getElementById("finalizarpedido-pollobbqx").hidden = true;
      document.getElementById("1pollobbqmedianas").hidden = false;
      document.getElementById("1pollobbqfamiliares").hidden = false;
      document.getElementById("1pollobbqmedianasx").hidden = true;
      document.getElementById("1pollobbqfamiliaresx").hidden = true;




      // Vegetariana
      document.getElementById("finalizarpedido-vegetariana").hidden = false; 
      document.getElementById("finalizarpedido-vegetarianax").hidden = true;
      document.getElementById("1vegetarianamedianas").hidden = false;
      document.getElementById("1vegetarianafamiliares").hidden = false;
      document.getElementById("1vegetarianamedianasx").hidden = true;
      document.getElementById("1vegetarianafamiliaresx").hidden = true;


      

  
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
      document.getElementById("1lucopizzamedianas").hidden = true;
      document.getElementById("1lucopizzafamiliares").hidden = true;






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





    




    function agregaralpedidolucopizza() {
      document.getElementById("inputs-lucopizza").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-lucopizza").value;
      document.getElementById("input-lucopizza-instrucciones").value= nota;
      document.getElementById("volver-lucopizza-html").hidden = true; 

           // Italiana
           document.getElementById("finalizarpedido-italiana").hidden = true; 
           document.getElementById("finalizarpedido-italianax").hidden = false;
           document.getElementById("1italianamedianas").hidden = true;
           document.getElementById("1italianafamiliares").hidden = true;
           document.getElementById("1italianamedianasx").hidden = false;
           document.getElementById("1italianafamiliaresx").hidden = false;
     
      
     
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
     
     
            // Luco Pizza
            document.getElementById("finalizarpedido-lucopizza").hidden = true; 
            document.getElementById("finalizarpedido-lucopizzax").hidden = false;
            document.getElementById("1lucopizzamedianas").hidden = true;
            document.getElementById("1lucopizzafamiliares").hidden = true;
            document.getElementById("1lucopizzamedianasx").hidden = false;
            document.getElementById("1lucopizzafamiliaresx").hidden = false;
     
     
             // Pollo BBQ
           document.getElementById("finalizarpedido-pollobbq").hidden = true; 
           document.getElementById("finalizarpedido-pollobbqx").hidden = false;
           document.getElementById("1pollobbqmedianas").hidden = true;
           document.getElementById("1pollobbqfamiliares").hidden = true;
           document.getElementById("1pollobbqmedianasx").hidden = false;
           document.getElementById("1pollobbqfamiliaresx").hidden = false;
     
     
     
     
           // Vegetariana
           document.getElementById("finalizarpedido-vegetariana").hidden = true; 
           document.getElementById("finalizarpedido-vegetarianax").hidden = false;
           document.getElementById("1vegetarianamedianas").hidden = true;
           document.getElementById("1vegetarianafamiliares").hidden = true;
           document.getElementById("1vegetarianamedianasx").hidden = false;
           document.getElementById("1vegetarianafamiliaresx").hidden = false;
     
     
           
     
       
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
           document.getElementById("1lucopizzamedianas").hidden = false;
           document.getElementById("1lucopizzafamiliares").hidden = false;

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



      

    function volverlucopizza() {
      document.getElementById("volver-lucopizza-html").hidden = false; 
    }

    // FIN Luco Pizza 


    




























