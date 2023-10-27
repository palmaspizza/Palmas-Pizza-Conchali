// ITALIANA



function cambiarcolorfamiliaritaliana(){
  document.getElementById("familiaritaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiaritaliana").style.color = "#fff"
  document.getElementById("familiaritaliana").style.fontSize = "170%"
  document.getElementById("medianaitaliana").style.background = "#fff"
  document.getElementById("medianaitaliana").style.color = "#ff7700"
  document.getElementById("medianaitaliana").style.fontSize = "150%"
  document.getElementById("input-italiana-tamaño").value = 'FAMILIARES';

}

function cambiarcolormedianaitaliana(){
  document.getElementById("medianaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianaitaliana").style.color = "#fff"
  document.getElementById("medianaitaliana").style.fontSize = "170%"
  document.getElementById("familiaritaliana").style.background = "#fff"
  document.getElementById("familiaritaliana").style.color = "#ff7700"
  document.getElementById("familiaritaliana").style.fontSize = "150%"
  document.getElementById("input-italiana-tamaño").value = 'MEDIANAS';
}



function cambiarcolorsalsapizzaitaliana(){
  document.getElementById("salsapizzaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzaitaliana").style.color = "#fff"
  document.getElementById("salsapizzaitaliana").style.fontSize = "170%"
  document.getElementById("salsabbqitaliana").style.background = "#fff"
  document.getElementById("salsabbqitaliana").style.color = "#ff7700"
  document.getElementById("salsabbqitaliana").style.fontSize = "150%"

}

function cambiarcolorsalsabbqitaliana(){
  document.getElementById("salsabbqitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqitaliana").style.color = "#fff"
  document.getElementById("salsabbqitaliana").style.fontSize = "170%"
  document.getElementById("salsapizzaitaliana").style.background = "#fff"
  document.getElementById("salsapizzaitaliana").style.color = "#ff7700"
  document.getElementById("salsapizzaitaliana").style.fontSize = "150%"
}








function cambiarcolormasatradicionalitaliana(){
  document.getElementById("masadelgadaitaliana").style.background = "#fff"
  document.getElementById("masadelgadaitaliana").style.color = "#ff7700"
  document.getElementById("masadelgadaitaliana").style.fontSize = "150%"
  document.getElementById("masatradicionalitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalitaliana").style.color = "#fff"
  document.getElementById("masatradicionalitaliana").style.fontSize = "170%"
  document.getElementById("input-italiana-masa").value = 'MASA TRADICIONAL';
}

function cambiarcolormasadelgadaitaliana(){
  document.getElementById("masatradicionalitaliana").style.background = "#fff"
  document.getElementById("masatradicionalitaliana").style.color = "#ff7700"
  document.getElementById("masatradicionalitaliana").style.fontSize = "150%"
  document.getElementById("masadelgadaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadaitaliana").style.color = "#fff"
  document.getElementById("masadelgadaitaliana").style.fontSize = "170%"
  document.getElementById("input-italiana-masa").value = 'MASA DELGADA';
}


function italianamedianasx() {
  document.getElementById("input-italiana-precio").value = '$6.000';
  document.getElementById("input-italiana-cantidad").value = '1';
  document.getElementById("input-italiana-tamaño").value = 'MEDIANA';
  document.getElementById("input-italiana-pizza").value = 'ITALIANA';
  document.getElementById("1italianamedianas").hidden = false;
  document.getElementById("1italianamedianasx").hidden = true;
  
  }


function italianamedianas() {
document.getElementById("input-italiana-precio").value = '$8.990';
document.getElementById("input-italiana-cantidad").value = '1';
document.getElementById("input-italiana-tamaño").value = 'MEDIANA';
document.getElementById("input-italiana-pizza").value = 'ITALIANA';
document.getElementById("1italianamedianas").hidden = true;
document.getElementById("1italianamedianasx").hidden = false;

}

function italianamedianasdos() {
document.getElementById("input-italiana-precio").value = '$14.990';
document.getElementById("input-italiana-cantidad").value = '2';


}

function italianamedianastres() {
document.getElementById("input-italiana-precio").value = '$23.980';
document.getElementById("input-italiana-cantidad").value = '3';

}

function italianamedianascuatro() {
document.getElementById("input-italiana-precio").value = '$29.980';
document.getElementById("input-italiana-cantidad").value = '4';

}


function italianafamiliaresx() {
  document.getElementById("input-italiana-precio").value = '$7.000';
  document.getElementById("input-italiana-cantidad").value = '1';
  document.getElementById("input-italiana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-italiana-pizza").value = 'ITALIANA';
  }



function italianafamiliares() {
document.getElementById("input-italiana-precio").value = '$10.990';
document.getElementById("input-italiana-cantidad").value = '1';
document.getElementById("input-italiana-tamaño").value = 'FAMILIAR';
document.getElementById("input-italiana-pizza").value = 'ITALIANA';
}

function italianafamiliaresdos() {
document.getElementById("input-italiana-precio").value = '$17.990';
document.getElementById("input-italiana-cantidad").value = '2';
}

function italianafamiliarestres() {
document.getElementById("input-italiana-precio").value = '$28.990';
document.getElementById("input-italiana-cantidad").value = '3';
}

function italianafamiliarescuatro() {
document.getElementById("input-italiana-precio").value = '$35.980';
document.getElementById("input-italiana-cantidad").value = '4';
}



function italianapizza() {
  document.getElementById("input-italiana-pizza").value = 'ITALIANAS';
  document.getElementById("volver-italiana-html").hidden = true; 
  }



  function borrarpedidoitaliana() {
    document.getElementById("input-italiana-pizza").value = '';
    document.getElementById("input-italiana-tamaño").value = '';
    document.getElementById("input-italiana-cantidad").value = '';
    document.getElementById("input-italiana-precio").value = '';
    document.getElementById("input-italiana-masa").value = '';
    document.getElementById("inputs-italiana").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-italiana").hidden = true; 
    }










    function agregaralpedidoitalianax() {
      document.getElementById("inputs-italiana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-italiana").value;
      document.getElementById("input-italiana-instrucciones").value= nota;
      document.getElementById("volver-italiana-html").hidden = true; 



     





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





    




    function agregaralpedidoitaliana() {
      document.getElementById("inputs-italiana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-italiana").value;
      document.getElementById("input-italiana-instrucciones").value= nota;
      document.getElementById("volver-italiana-html").hidden = true; 

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
           document.getElementById("1italianamedianas").hidden = false;
           document.getElementById("1italianafamiliares").hidden = false;

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



      

    function volveritaliana() {
      document.getElementById("volver-italiana-html").hidden = false; 
    }

    // FIN ITALIANA 


    




























