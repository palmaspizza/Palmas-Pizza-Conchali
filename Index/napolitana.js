// NAPOLITANA



function cambiarcolorfamiliarnapolitana(){
  document.getElementById("familiarnapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarnapolitana").style.color = "#fff"
  document.getElementById("familiarnapolitana").style.fontSize = "170%"
  document.getElementById("mediananapolitana").style.background = "#fff"
  document.getElementById("mediananapolitana").style.color = "#ff7700"
  document.getElementById("mediananapolitana").style.fontSize = "150%"
  document.getElementById("input-napolitana-tamaño").value = 'FAMILIARES';

}

function cambiarcolormediananapolitana(){
  document.getElementById("mediananapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("mediananapolitana").style.color = "#fff"
  document.getElementById("mediananapolitana").style.fontSize = "170%"
  document.getElementById("familiarnapolitana").style.background = "#fff"
  document.getElementById("familiarnapolitana").style.color = "#ff7700"
  document.getElementById("familiarnapolitana").style.fontSize = "150%"
  document.getElementById("input-napolitana-tamaño").value = 'MEDIANAS';
}



function cambiarcolorsalsapizzanapolitana(){
  document.getElementById("salsapizzanapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzanapolitana").style.color = "#fff"
  document.getElementById("salsapizzanapolitana").style.fontSize = "170%"
  document.getElementById("salsabbqnapolitana").style.background = "#fff"
  document.getElementById("salsabbqnapolitana").style.color = "#ff7700"
  document.getElementById("salsabbqnapolitana").style.fontSize = "150%"

}

function cambiarcolorsalsabbqnapolitana(){
  document.getElementById("salsabbqnapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqnapolitana").style.color = "#fff"
  document.getElementById("salsabbqnapolitana").style.fontSize = "170%"
  document.getElementById("salsapizzanapolitana").style.background = "#fff"
  document.getElementById("salsapizzanapolitana").style.color = "#ff7700"
  document.getElementById("salsapizzanapolitana").style.fontSize = "150%"
}








function cambiarcolormasatradicionalnapolitana(){
  document.getElementById("masadelgadanapolitana").style.background = "#fff"
  document.getElementById("masadelgadanapolitana").style.color = "#ff7700"
  document.getElementById("masadelgadanapolitana").style.fontSize = "150%"
  document.getElementById("masatradicionalnapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalnapolitana").style.color = "#fff"
  document.getElementById("masatradicionalnapolitana").style.fontSize = "170%"
  document.getElementById("input-napolitana-masa").value = 'MASA TRADICIONAL';
}

function cambiarcolormasadelgadanapolitana(){
  document.getElementById("masatradicionalnapolitana").style.background = "#fff"
  document.getElementById("masatradicionalnapolitana").style.color = "#ff7700"
  document.getElementById("masatradicionalnapolitana").style.fontSize = "150%"
  document.getElementById("masadelgadanapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadanapolitana").style.color = "#fff"
  document.getElementById("masadelgadanapolitana").style.fontSize = "170%"
  document.getElementById("input-napolitana-masa").value = 'MASA DELGADA';
}


function napolitanamedianasx() {
  document.getElementById("input-napolitana-precio").value = '$6.000';
  document.getElementById("input-napolitana-cantidad").value = '1';
  document.getElementById("input-napolitana-tamaño").value = 'MEDIANA';
  document.getElementById("input-napolitana-pizza").value = 'NAPOLITANA';
  
  }


function napolitanamedianas() {
document.getElementById("input-napolitana-precio").value = '$8.990';
document.getElementById("input-napolitana-cantidad").value = '1';
document.getElementById("input-napolitana-tamaño").value = 'MEDIANA';
document.getElementById("input-napolitana-pizza").value = 'NAPOLITANA';

}

function napolitanamedianasdos() {
document.getElementById("input-napolitana-precio").value = '$14.990';
document.getElementById("input-napolitana-cantidad").value = '2';


}

function napolitanamedianastres() {
document.getElementById("input-napolitana-precio").value = '$23.980';
document.getElementById("input-napolitana-cantidad").value = '3';

}

function napolitanamedianascuatro() {
document.getElementById("input-napolitana-precio").value = '$29.980';
document.getElementById("input-napolitana-cantidad").value = '4';

}


function napolitanafamiliaresx() {
  document.getElementById("input-napolitana-precio").value = '$7.000';
  document.getElementById("input-napolitana-cantidad").value = '1';
  document.getElementById("input-napolitana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-napolitana-pizza").value = 'NAPOLITANA';
  }



function napolitanafamiliares() {
document.getElementById("input-napolitana-precio").value = '$10.990';
document.getElementById("input-napolitana-cantidad").value = '1';
document.getElementById("input-napolitana-tamaño").value = 'FAMILIAR';
document.getElementById("input-napolitana-pizza").value = 'NAPOLITANA';
}

function napolitanafamiliaresdos() {
document.getElementById("input-napolitana-precio").value = '$17.990';
document.getElementById("input-napolitana-cantidad").value = '2';
}

function napolitanafamiliarestres() {
document.getElementById("input-napolitana-precio").value = '$28.990';
document.getElementById("input-napolitana-cantidad").value = '3';
}

function napolitanafamiliarescuatro() {
document.getElementById("input-napolitana-precio").value = '$35.980';
document.getElementById("input-napolitana-cantidad").value = '4';
}



function napolitanapizza() {
  document.getElementById("input-napolitana-pizza").value = 'NAPOLITANAS';
  document.getElementById("volver-napolitana-html").hidden = true; 
  }



  function borrarpedidonapolitana() {
    document.getElementById("input-napolitana-pizza").value = '';
    document.getElementById("input-napolitana-tamaño").value = '';
    document.getElementById("input-napolitana-cantidad").value = '';
    document.getElementById("input-napolitana-precio").value = '';
    document.getElementById("input-napolitana-masa").value = '';
    document.getElementById("inputs-napolitana").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-napolitana").hidden = true; 
    }










    function agregaralpedidonapolitanax() {
      document.getElementById("inputs-napolitana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-napolitana").value;
      document.getElementById("input-napolitana-instrucciones").value= nota;
      document.getElementById("volver-napolitana-html").hidden = true; 



      // Napolitana
      document.getElementById("finalizarpedido-napolitana").hidden = false; 
      document.getElementById("finalizarpedido-napolitanax").hidden = true;
      document.getElementById("1napolitanamedianas").hidden = false;
      document.getElementById("1napolitanafamiliares").hidden = false;
      document.getElementById("1napolitanamedianasx").hidden = true;
      document.getElementById("1napolitanafamiliaresx").hidden = true;

 

      // Hawaiana
      document.getElementById("finalizarpedido-hawaiana").hidden = false; 
      document.getElementById("finalizarpedido-hawaianax").hidden = true;
      document.getElementById("1hawaianamedianas").hidden = false;
      document.getElementById("1hawaianafamiliares").hidden = false;
      document.getElementById("1hawaianamedianasx").hidden = true;
      document.getElementById("1hawaianafamiliaresx").hidden = true;


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
      document.getElementById("1napolitanamedianas").hidden = true;
      document.getElementById("1napolitanafamiliares").hidden = true;






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





    




    function agregaralpedidonapolitana() {
      document.getElementById("inputs-napolitana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-napolitana").value;
      document.getElementById("input-napolitana-instrucciones").value= nota;
      document.getElementById("volver-napolitana-html").hidden = true; 

           // Napolitana
           document.getElementById("finalizarpedido-napolitana").hidden = true; 
           document.getElementById("finalizarpedido-napolitanax").hidden = false;
           document.getElementById("1napolitanamedianas").hidden = true;
           document.getElementById("1napolitanafamiliares").hidden = true;
           document.getElementById("1napolitanamedianasx").hidden = false;
           document.getElementById("1napolitanafamiliaresx").hidden = false;
     
      
     
           // Hawaiana
           document.getElementById("finalizarpedido-hawaiana").hidden = true; 
           document.getElementById("finalizarpedido-hawaianax").hidden = false;
           document.getElementById("1hawaianamedianas").hidden = true;
           document.getElementById("1hawaianafamiliares").hidden = true;
           document.getElementById("1hawaianamedianasx").hidden = false;
           document.getElementById("1hawaianafamiliaresx").hidden = false;
     
     
       
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
           document.getElementById("1napolitanamedianas").hidden = false;
           document.getElementById("1napolitanafamiliares").hidden = false;

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



      

    function volvernapolitana() {
      document.getElementById("volver-napolitana-html").hidden = false; 
    }

    // FIN NAPOLITANA 


    




























