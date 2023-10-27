// VEGETARIANA



function cambiarcolorfamiliarvegetariana(){
  document.getElementById("familiarvegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarvegetariana").style.color = "#fff"
  document.getElementById("familiarvegetariana").style.fontSize = "170%"
  document.getElementById("medianavegetariana").style.background = "#fff"
  document.getElementById("medianavegetariana").style.color = "#ff7700"
  document.getElementById("medianavegetariana").style.fontSize = "150%"
  document.getElementById("input-vegetariana-tamaño").value = 'FAMILIARES';

}

function cambiarcolormedianavegetariana(){
  document.getElementById("medianavegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianavegetariana").style.color = "#fff"
  document.getElementById("medianavegetariana").style.fontSize = "170%"
  document.getElementById("familiarvegetariana").style.background = "#fff"
  document.getElementById("familiarvegetariana").style.color = "#ff7700"
  document.getElementById("familiarvegetariana").style.fontSize = "150%"
  document.getElementById("input-vegetariana-tamaño").value = 'MEDIANAS';
}



function cambiarcolorsalsapizzavegetariana(){
  document.getElementById("salsapizzavegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzavegetariana").style.color = "#fff"
  document.getElementById("salsapizzavegetariana").style.fontSize = "170%"
  document.getElementById("salsabbqvegetariana").style.background = "#fff"
  document.getElementById("salsabbqvegetariana").style.color = "#ff7700"
  document.getElementById("salsabbqvegetariana").style.fontSize = "150%"

}

function cambiarcolorsalsabbqvegetariana(){
  document.getElementById("salsabbqvegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqvegetariana").style.color = "#fff"
  document.getElementById("salsabbqvegetariana").style.fontSize = "170%"
  document.getElementById("salsapizzavegetariana").style.background = "#fff"
  document.getElementById("salsapizzavegetariana").style.color = "#ff7700"
  document.getElementById("salsapizzavegetariana").style.fontSize = "150%"
}








function cambiarcolormasatradicionalvegetariana(){
  document.getElementById("masadelgadavegetariana").style.background = "#fff"
  document.getElementById("masadelgadavegetariana").style.color = "#ff7700"
  document.getElementById("masadelgadavegetariana").style.fontSize = "150%"
  document.getElementById("masatradicionalvegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalvegetariana").style.color = "#fff"
  document.getElementById("masatradicionalvegetariana").style.fontSize = "170%"
  document.getElementById("input-vegetariana-masa").value = 'MASA TRADICIONAL';
}

function cambiarcolormasadelgadavegetariana(){
  document.getElementById("masatradicionalvegetariana").style.background = "#fff"
  document.getElementById("masatradicionalvegetariana").style.color = "#ff7700"
  document.getElementById("masatradicionalvegetariana").style.fontSize = "150%"
  document.getElementById("masadelgadavegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadavegetariana").style.color = "#fff"
  document.getElementById("masadelgadavegetariana").style.fontSize = "170%"
  document.getElementById("input-vegetariana-masa").value = 'MASA DELGADA';
}


function vegetarianamedianasx() {
  document.getElementById("input-vegetariana-precio").value = '$6.000';
  document.getElementById("input-vegetariana-cantidad").value = '1';
  document.getElementById("input-vegetariana-tamaño").value = 'MEDIANA';
  document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANA';
  
  }


function vegetarianamedianas() {
document.getElementById("input-vegetariana-precio").value = '$8.990';
document.getElementById("input-vegetariana-cantidad").value = '1';
document.getElementById("input-vegetariana-tamaño").value = 'MEDIANA';
document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANA';

}

function vegetarianamedianasdos() {
document.getElementById("input-vegetariana-precio").value = '$14.990';
document.getElementById("input-vegetariana-cantidad").value = '2';


}

function vegetarianamedianastres() {
document.getElementById("input-vegetariana-precio").value = '$23.980';
document.getElementById("input-vegetariana-cantidad").value = '3';

}

function vegetarianamedianascuatro() {
document.getElementById("input-vegetariana-precio").value = '$29.980';
document.getElementById("input-vegetariana-cantidad").value = '4';

}


function vegetarianafamiliaresx() {
  document.getElementById("input-vegetariana-precio").value = '$7.000';
  document.getElementById("input-vegetariana-cantidad").value = '1';
  document.getElementById("input-vegetariana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANA';
  }



function vegetarianafamiliares() {
document.getElementById("input-vegetariana-precio").value = '$10.990';
document.getElementById("input-vegetariana-cantidad").value = '1';
document.getElementById("input-vegetariana-tamaño").value = 'FAMILIAR';
document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANA';
}

function vegetarianafamiliaresdos() {
document.getElementById("input-vegetariana-precio").value = '$17.990';
document.getElementById("input-vegetariana-cantidad").value = '2';
}

function vegetarianafamiliarestres() {
document.getElementById("input-vegetariana-precio").value = '$28.990';
document.getElementById("input-vegetariana-cantidad").value = '3';
}

function vegetarianafamiliarescuatro() {
document.getElementById("input-vegetariana-precio").value = '$35.980';
document.getElementById("input-vegetariana-cantidad").value = '4';
}



function vegetarianapizza() {
  document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANAS';
  document.getElementById("volver-vegetariana-html").hidden = true; 
  }



  function borrarpedidovegetariana() {
    document.getElementById("input-vegetariana-pizza").value = '';
    document.getElementById("input-vegetariana-tamaño").value = '';
    document.getElementById("input-vegetariana-cantidad").value = '';
    document.getElementById("input-vegetariana-precio").value = '';
    document.getElementById("input-vegetariana-masa").value = '';
    document.getElementById("inputs-vegetariana").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-vegetariana").hidden = true; 
    }










    function agregaralpedidovegetarianax() {
      document.getElementById("inputs-vegetariana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-vegetariana").value;
      document.getElementById("input-vegetariana-instrucciones").value= nota;
      document.getElementById("volver-vegetariana-html").hidden = true; 



      // Vegetariana
      document.getElementById("finalizarpedido-vegetariana").hidden = false; 
      document.getElementById("finalizarpedido-vegetarianax").hidden = true;
      document.getElementById("1vegetarianamedianas").hidden = false;
      document.getElementById("1vegetarianafamiliares").hidden = false;
      document.getElementById("1vegetarianamedianasx").hidden = true;
      document.getElementById("1vegetarianafamiliaresx").hidden = true;

 

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
      document.getElementById("1vegetarianamedianas").hidden = true;
      document.getElementById("1vegetarianafamiliares").hidden = true;






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





    




    function agregaralpedidovegetariana() {
      document.getElementById("inputs-vegetariana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-vegetariana").value;
      document.getElementById("input-vegetariana-instrucciones").value= nota;
      document.getElementById("volver-vegetariana-html").hidden = true; 

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
           document.getElementById("1vegetarianamedianas").hidden = false;
           document.getElementById("1vegetarianafamiliares").hidden = false;

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



      

    function volvervegetariana() {
      document.getElementById("volver-vegetariana-html").hidden = false; 
    }

    // FIN VEGETARIANA 


    




























