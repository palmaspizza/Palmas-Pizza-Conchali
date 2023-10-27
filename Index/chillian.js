// CHILLIAN



function cambiarcolorfamiliarchillian(){
  document.getElementById("familiarchillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarchillian").style.color = "#fff"
  document.getElementById("familiarchillian").style.fontSize = "170%"
  document.getElementById("medianachillian").style.background = "#fff"
  document.getElementById("medianachillian").style.color = "#ff7700"
  document.getElementById("medianachillian").style.fontSize = "150%"
  document.getElementById("input-chillian-tamaño").value = 'FAMILIARES';

}

function cambiarcolormedianachillian(){
  document.getElementById("medianachillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianachillian").style.color = "#fff"
  document.getElementById("medianachillian").style.fontSize = "170%"
  document.getElementById("familiarchillian").style.background = "#fff"
  document.getElementById("familiarchillian").style.color = "#ff7700"
  document.getElementById("familiarchillian").style.fontSize = "150%"
  document.getElementById("input-chillian-tamaño").value = 'MEDIANAS';
}



function cambiarcolorsalsapizzachillian(){
  document.getElementById("salsapizzachillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzachillian").style.color = "#fff"
  document.getElementById("salsapizzachillian").style.fontSize = "170%"
  document.getElementById("salsabbqchillian").style.background = "#fff"
  document.getElementById("salsabbqchillian").style.color = "#ff7700"
  document.getElementById("salsabbqchillian").style.fontSize = "150%"

}

function cambiarcolorsalsabbqchillian(){
  document.getElementById("salsabbqchillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqchillian").style.color = "#fff"
  document.getElementById("salsabbqchillian").style.fontSize = "170%"
  document.getElementById("salsapizzachillian").style.background = "#fff"
  document.getElementById("salsapizzachillian").style.color = "#ff7700"
  document.getElementById("salsapizzachillian").style.fontSize = "150%"
}








function cambiarcolormasatradicionalchillian(){
  document.getElementById("masadelgadachillian").style.background = "#fff"
  document.getElementById("masadelgadachillian").style.color = "#ff7700"
  document.getElementById("masadelgadachillian").style.fontSize = "150%"
  document.getElementById("masatradicionalchillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalchillian").style.color = "#fff"
  document.getElementById("masatradicionalchillian").style.fontSize = "170%"
  document.getElementById("input-chillian-masa").value = 'MASA TRADICIONAL';
}

function cambiarcolormasadelgadachillian(){
  document.getElementById("masatradicionalchillian").style.background = "#fff"
  document.getElementById("masatradicionalchillian").style.color = "#ff7700"
  document.getElementById("masatradicionalchillian").style.fontSize = "150%"
  document.getElementById("masadelgadachillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadachillian").style.color = "#fff"
  document.getElementById("masadelgadachillian").style.fontSize = "170%"
  document.getElementById("input-chillian-masa").value = 'MASA DELGADA';
}


function chillianmedianasx() {
  document.getElementById("input-chillian-precio").value = '$6.000';
  document.getElementById("input-chillian-cantidad").value = '1';
  document.getElementById("input-chillian-tamaño").value = 'MEDIANA';
  document.getElementById("input-chillian-pizza").value = 'CHILLIAN';
  
  }


function chillianmedianas() {
document.getElementById("input-chillian-precio").value = '$8.990';
document.getElementById("input-chillian-cantidad").value = '1';
document.getElementById("input-chillian-tamaño").value = 'MEDIANA';
document.getElementById("input-chillian-pizza").value = 'CHILLIAN';

}

function chillianmedianasdos() {
document.getElementById("input-chillian-precio").value = '$14.990';
document.getElementById("input-chillian-cantidad").value = '2';


}

function chillianmedianastres() {
document.getElementById("input-chillian-precio").value = '$23.980';
document.getElementById("input-chillian-cantidad").value = '3';

}

function chillianmedianascuatro() {
document.getElementById("input-chillian-precio").value = '$29.980';
document.getElementById("input-chillian-cantidad").value = '4';

}


function chillianfamiliaresx() {
  document.getElementById("input-chillian-precio").value = '$7.000';
  document.getElementById("input-chillian-cantidad").value = '1';
  document.getElementById("input-chillian-tamaño").value = 'FAMILIAR';
  document.getElementById("input-chillian-pizza").value = 'CHILLIAN';
  }



function chillianfamiliares() {
document.getElementById("input-chillian-precio").value = '$10.990';
document.getElementById("input-chillian-cantidad").value = '1';
document.getElementById("input-chillian-tamaño").value = 'FAMILIAR';
document.getElementById("input-chillian-pizza").value = 'CHILLIAN';
}

function chillianfamiliaresdos() {
document.getElementById("input-chillian-precio").value = '$17.990';
document.getElementById("input-chillian-cantidad").value = '2';
}

function chillianfamiliarestres() {
document.getElementById("input-chillian-precio").value = '$28.990';
document.getElementById("input-chillian-cantidad").value = '3';
}

function chillianfamiliarescuatro() {
document.getElementById("input-chillian-precio").value = '$35.980';
document.getElementById("input-chillian-cantidad").value = '4';
}



function chillianpizza() {
  document.getElementById("input-chillian-pizza").value = 'CHILLIANS';
  document.getElementById("volver-chillian-html").hidden = true; 
  }



  function borrarpedidochillian() {
    document.getElementById("input-chillian-pizza").value = '';
    document.getElementById("input-chillian-tamaño").value = '';
    document.getElementById("input-chillian-cantidad").value = '';
    document.getElementById("input-chillian-precio").value = '';
    document.getElementById("input-chillian-masa").value = '';
    document.getElementById("inputs-chillian").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-chillian").hidden = true; 
    }










    function agregaralpedidochillianx() {
      document.getElementById("inputs-chillian").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-chillian").value;
      document.getElementById("input-chillian-instrucciones").value= nota;
      document.getElementById("volver-chillian-html").hidden = true; 



      // Chillian
      document.getElementById("finalizarpedido-chillian").hidden = false; 
      document.getElementById("finalizarpedido-chillianx").hidden = true;
      document.getElementById("1chillianmedianas").hidden = false;
      document.getElementById("1chillianfamiliares").hidden = false;
      document.getElementById("1chillianmedianasx").hidden = true;
      document.getElementById("1chillianfamiliaresx").hidden = true;

 

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


      

  
      // Vegetariana
      document.getElementById("finalizarpedido-chillianvegetariana").hidden = false; 
      document.getElementById("finalizarpedido-chillianvegetarianax").hidden = true;
      document.getElementById("1chillianvegetarianamedianas").hidden = false;
      document.getElementById("1chillianvegetarianafamiliares").hidden = false;
      document.getElementById("1chillianvegetarianamedianasx").hidden = true;
      document.getElementById("1chillianvegetarianafamiliaresx").hidden = true;





      // Super Pepperoni
      document.getElementById("finalizarpedido-superpepperoni").hidden = false; 
      document.getElementById("finalizarpedido-superpepperonix").hidden = true;
      document.getElementById("1superpepperonimedianas").hidden = false;
      document.getElementById("1superpepperonifamiliares").hidden = false;
      document.getElementById("1superpepperonimedianasx").hidden = true;
      document.getElementById("1superpepperonifamiliaresx").hidden = true;

      

  // This.Pizza
      document.getElementById("1chillianmedianas").hidden = true;
      document.getElementById("1chillianfamiliares").hidden = true;






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





    




    function agregaralpedidochillian() {
      document.getElementById("inputs-chillian").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-chillian").value;
      document.getElementById("input-chillian-instrucciones").value= nota;
      document.getElementById("volver-chillian-html").hidden = true; 

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
     
     
            // Chillian
            document.getElementById("finalizarpedido-chillian").hidden = true; 
            document.getElementById("finalizarpedido-chillianx").hidden = false;
            document.getElementById("1chillianmedianas").hidden = true;
            document.getElementById("1chillianfamiliares").hidden = true;
            document.getElementById("1chillianmedianasx").hidden = false;
            document.getElementById("1chillianfamiliaresx").hidden = false;
     
     
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
     
     
           
     
       
           // Vegetariana
           document.getElementById("finalizarpedido-vegetariana").hidden = true; 
           document.getElementById("finalizarpedido-vegetarianax").hidden = false;
           document.getElementById("1vegetarianamedianas").hidden = true;
           document.getElementById("1vegetarianafamiliares").hidden = true;
           document.getElementById("1vegetarianamedianasx").hidden = false;
           document.getElementById("1vegetarianafamiliaresx").hidden = false;
     
     
     
     
     
           // Super Pepperoni
           document.getElementById("finalizarpedido-superpepperoni").hidden = true; 
           document.getElementById("finalizarpedido-superpepperonix").hidden = false;
           document.getElementById("1superpepperonimedianas").hidden = true;
           document.getElementById("1superpepperonifamiliares").hidden = true;
           document.getElementById("1superpepperonimedianasx").hidden = false;
           document.getElementById("1superpepperonifamiliaresx").hidden = false;
     
           
     
       // This.Pizza
           document.getElementById("1chillianmedianas").hidden = false;
           document.getElementById("1chillianfamiliares").hidden = false;

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



      

    function volverchillian() {
      document.getElementById("volver-chillian-html").hidden = false; 
    }

    // FIN CHILLIAN 


    




























