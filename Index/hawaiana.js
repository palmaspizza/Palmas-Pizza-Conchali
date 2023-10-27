// NAPOLITANA



function cambiarcolorfamiliarhawaiana(){
  document.getElementById("familiarhawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarhawaiana").style.color = "#fff"
  document.getElementById("familiarhawaiana").style.fontSize = "170%"
  document.getElementById("medianahawaiana").style.background = "#fff"
  document.getElementById("medianahawaiana").style.color = "#ff7700"
  document.getElementById("medianahawaiana").style.fontSize = "150%"
  document.getElementById("input-hawaiana-tamaño").value = 'FAMILIARES';

}

function cambiarcolormedianahawaiana(){
  document.getElementById("medianahawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianahawaiana").style.color = "#fff"
  document.getElementById("medianahawaiana").style.fontSize = "170%"
  document.getElementById("familiarhawaiana").style.background = "#fff"
  document.getElementById("familiarhawaiana").style.color = "#ff7700"
  document.getElementById("familiarhawaiana").style.fontSize = "150%"
  document.getElementById("input-hawaiana-tamaño").value = 'MEDIANAS';
}



function cambiarcolorsalsapizzahawaiana(){
  document.getElementById("salsapizzahawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzahawaiana").style.color = "#fff"
  document.getElementById("salsapizzahawaiana").style.fontSize = "170%"
  document.getElementById("salsabbqhawaiana").style.background = "#fff"
  document.getElementById("salsabbqhawaiana").style.color = "#ff7700"
  document.getElementById("salsabbqhawaiana").style.fontSize = "150%"

}

function cambiarcolorsalsabbqhawaiana(){
  document.getElementById("salsabbqhawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqhawaiana").style.color = "#fff"
  document.getElementById("salsabbqhawaiana").style.fontSize = "170%"
  document.getElementById("salsapizzahawaiana").style.background = "#fff"
  document.getElementById("salsapizzahawaiana").style.color = "#ff7700"
  document.getElementById("salsapizzahawaiana").style.fontSize = "150%"
}








function cambiarcolormasatradicionalhawaiana(){
  document.getElementById("masadelgadahawaiana").style.background = "#fff"
  document.getElementById("masadelgadahawaiana").style.color = "#ff7700"
  document.getElementById("masadelgadahawaiana").style.fontSize = "150%"
  document.getElementById("masatradicionalhawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalhawaiana").style.color = "#fff"
  document.getElementById("masatradicionalhawaiana").style.fontSize = "170%"
  document.getElementById("input-hawaiana-masa").value = 'MASA TRADICIONAL';
}

function cambiarcolormasadelgadahawaiana(){
  document.getElementById("masatradicionalhawaiana").style.background = "#fff"
  document.getElementById("masatradicionalhawaiana").style.color = "#ff7700"
  document.getElementById("masatradicionalhawaiana").style.fontSize = "150%"
  document.getElementById("masadelgadahawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadahawaiana").style.color = "#fff"
  document.getElementById("masadelgadahawaiana").style.fontSize = "170%"
  document.getElementById("input-hawaiana-masa").value = 'MASA DELGADA';
}


function hawaianamedianasX() {
  document.getElementById("input-hawaiana-precio").value = '$6.000';
  document.getElementById("input-hawaiana-cantidad").value = '1';
  document.getElementById("input-hawaiana-tamaño").value = 'MEDIANA';
  document.getElementById("input-hawaiana-pizza").value = 'NAPOLITANA';
  
  }


function hawaianamedianas() {
document.getElementById("input-hawaiana-precio").value = '$8.990';
document.getElementById("input-hawaiana-cantidad").value = '1';
document.getElementById("input-hawaiana-tamaño").value = 'MEDIANA';
document.getElementById("input-hawaiana-pizza").value = 'NAPOLITANA';

}

function hawaianamedianasdos() {
document.getElementById("input-hawaiana-precio").value = '$14.990';
document.getElementById("input-hawaiana-cantidad").value = '2';


}

function hawaianamedianastres() {
document.getElementById("input-hawaiana-precio").value = '$23.980';
document.getElementById("input-hawaiana-cantidad").value = '3';

}

function hawaianamedianascuatro() {
document.getElementById("input-hawaiana-precio").value = '$29.980';
document.getElementById("input-hawaiana-cantidad").value = '4';

}


function hawaianafamiliaresX() {
  document.getElementById("input-hawaiana-precio").value = '$7.000';
  document.getElementById("input-hawaiana-cantidad").value = '1';
  document.getElementById("input-hawaiana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-hawaiana-pizza").value = 'NAPOLITANA';
  }



function hawaianafamiliares() {
document.getElementById("input-hawaiana-precio").value = '$10.990';
document.getElementById("input-hawaiana-cantidad").value = '1';
document.getElementById("input-hawaiana-tamaño").value = 'FAMILIAR';
document.getElementById("input-hawaiana-pizza").value = 'NAPOLITANA';
}

function hawaianafamiliaresdos() {
document.getElementById("input-hawaiana-precio").value = '$17.990';
document.getElementById("input-hawaiana-cantidad").value = '2';
}

function hawaianafamiliarestres() {
document.getElementById("input-hawaiana-precio").value = '$28.990';
document.getElementById("input-hawaiana-cantidad").value = '3';
}

function hawaianafamiliarescuatro() {
document.getElementById("input-hawaiana-precio").value = '$35.980';
document.getElementById("input-hawaiana-cantidad").value = '4';
}



function hawaianapizza() {
  document.getElementById("input-hawaiana-pizza").value = 'NAPOLITANAS';
  document.getElementById("volver-hawaiana-html").hidden = true; 
  }



  function borrarpedidohawaiana() {
    document.getElementById("input-hawaiana-pizza").value = '';
    document.getElementById("input-hawaiana-tamaño").value = '';
    document.getElementById("input-hawaiana-cantidad").value = '';
    document.getElementById("input-hawaiana-precio").value = '';
    document.getElementById("input-hawaiana-masa").value = '';
    document.getElementById("inputs-hawaiana").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-hawaiana").hidden = true; 
    }










    function agregaralpedidohawaianax() {
      document.getElementById("inputs-hawaiana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-hawaiana").value;
      document.getElementById("input-hawaiana-instrucciones").value= nota;
      document.getElementById("volver-hawaiana-html").hidden = true; 



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
      document.getElementById("1hawaianamedianas").hidden = true;
      document.getElementById("1hawaianafamiliares").hidden = true;






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





    




    function agregaralpedidohawaiana() {
      document.getElementById("inputs-hawaiana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-hawaiana").value;
      document.getElementById("input-hawaiana-instrucciones").value= nota;
      document.getElementById("volver-hawaiana-html").hidden = true; 

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
     
     
       
           // Italiana
           document.getElementById("finalizarpedido-italiana").hidden = true; 
           document.getElementById("finalizarpedido-italianax").hidden = false;
           document.getElementById("1italianamedianas").hidden = true;
           document.getElementById("1italianafamiliares").hidden = true;
           document.getElementById("1italianamedianasx").hidden = false;
           document.getElementById("1italianafamiliaresx").hidden = false;
     
     
            // Vegetariana
            document.getElementById("finalizarpedido-vegetariana").hidden = true; 
            document.getElementById("finalizarpedido-vegetarianax").hidden = false;
            document.getElementById("1vegetarianamedianas").hidden = true;
            document.getElementById("1vegetarianafamiliares").hidden = true;
            document.getElementById("1vegetarianamedianasx").hidden = false;
            document.getElementById("1vegetarianafamiliaresx").hidden = false;
     
     
             // Pollo BBQ
           document.getElementById("finalizarpedido-pollobbq").hidden = true; 
           document.getElementById("finalizarpedido-pollobbqx").hidden = false;
           document.getElementById("1pollobbqmedianas").hidden = true;
           document.getElementById("1pollobbqfamiliares").hidden = true;
           document.getElementById("1pollobbqmedianasx").hidden = false;
           document.getElementById("1pollobbqfamiliaresx").hidden = false;
     
     
     
     
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
           document.getElementById("1hawaianamedianas").hidden = false;
           document.getElementById("1hawaianafamiliares").hidden = false;

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



      

    function volverhawaiana() {
      document.getElementById("volver-hawaiana-html").hidden = false; 
    }

    // FIN NAPOLITANA 


    




























