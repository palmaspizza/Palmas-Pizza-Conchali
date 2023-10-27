// POLLOBBQ



function cambiarcolorfamiliarpollobbqF() {
    document.getElementById("familiarpollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("familiarpollobbq").style.color = "#fff"
    document.getElementById("familiarpollobbq").style.fontSize = "170%"
    document.getElementById("medianapollobbq").style.background = "#fff"
    document.getElementById("medianapollobbq").style.color = "#ff7700"
    document.getElementById("medianapollobbq").style.fontSize = "150%"
    document.getElementById("input-pollobbq-tamaño").value = 'FAMILIARES';
  
  }
  
  function cambiarcolormedianapollobbqF() {
    document.getElementById("medianapollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("medianapollobbq").style.color = "#fff"
    document.getElementById("medianapollobbq").style.fontSize = "170%"
    document.getElementById("familiarpollobbq").style.background = "#fff"
    document.getElementById("familiarpollobbq").style.color = "#ff7700"
    document.getElementById("familiarpollobbq").style.fontSize = "150%"
    document.getElementById("input-pollobbq-tamaño").value = 'MEDIANAS';
  }
  
  
  
  function cambiarcolorsalsapizzapollobbqF() {
    document.getElementById("salsapizzapollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsapizzapollobbq").style.color = "#fff"
    document.getElementById("salsapizzapollobbq").style.fontSize = "170%"
    document.getElementById("salsabbqpollobbq").style.background = "#fff"
    document.getElementById("salsabbqpollobbq").style.color = "#ff7700"
    document.getElementById("salsabbqpollobbq").style.fontSize = "150%"
  
  }
  
  function cambiarcolorsalsabbqpollobbqF() {
    document.getElementById("salsabbqpollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsabbqpollobbq").style.color = "#fff"
    document.getElementById("salsabbqpollobbq").style.fontSize = "170%"
    document.getElementById("salsapizzapollobbq").style.background = "#fff"
    document.getElementById("salsapizzapollobbq").style.color = "#ff7700"
    document.getElementById("salsapizzapollobbq").style.fontSize = "150%"
  }
  
  
  
  
  
  
  
  
  function cambiarcolormasatradicionalpollobbqF() {
    document.getElementById("masadelgadapollobbq").style.background = "#fff"
    document.getElementById("masadelgadapollobbq").style.color = "#ff7700"
    document.getElementById("masadelgadapollobbq").style.fontSize = "150%"
    document.getElementById("masatradicionalpollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masatradicionalpollobbq").style.color = "#fff"
    document.getElementById("masatradicionalpollobbq").style.fontSize = "170%"
    document.getElementById("input-pollobbq-masa").value = 'MASA TRADICIONAL';
    document.getElementById("finalizarpedido-pollobbq").hidden = false;
  
  }
  
  function cambiarcolormasadelgadapollobbqF() {
    document.getElementById("masatradicionalpollobbq").style.background = "#fff"
    document.getElementById("masatradicionalpollobbq").style.color = "#ff7700"
    document.getElementById("masatradicionalpollobbq").style.fontSize = "150%"
    document.getElementById("masadelgadapollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masadelgadapollobbq").style.color = "#fff"
    document.getElementById("masadelgadapollobbq").style.fontSize = "170%"
    document.getElementById("input-pollobbq-masa").value = 'MASA DELGADA';
    document.getElementById("finalizarpedido-pollobbq").hidden = false;
  }
  
  
  
  
  
  function pollobbqmedianasF() {
  document.getElementById("input-pollobbq-precio").value = '7495';
  document.getElementById("input-pollobbq-cantidad").value = '1';
  document.getElementById("input-pollobbq-tamaño").value = 'MEDIANA';
  document.getElementById("input-pollobbq-pizza").value = 'POLLOBBQ';
    document.getElementById("finalizarpedido-pollobbq").hidden = false;
  
  }
  
  function pollobbqmedianasdosF() {
  document.getElementById("input-pollobbq-precio").value = '14990';
  document.getElementById("input-pollobbq-cantidad").value = '2';
  
  
  }
  
  function pollobbqmedianastresF() {
  document.getElementById("input-pollobbq-precio").value = '23980';
  document.getElementById("input-pollobbq-cantidad").value = '3';
  
  }
  
  function pollobbqmedianascuatroF() {
  document.getElementById("input-pollobbq-precio").value = '29980';
  document.getElementById("input-pollobbq-cantidad").value = '4';
  
  }
  
  
  
  
  
  
  function pollobbqfamiliaresF() {
  document.getElementById("input-pollobbq-precio").value = '8995';
  document.getElementById("input-pollobbq-cantidad").value = '1';
  document.getElementById("input-pollobbq-tamaño").value = 'FAMILIAR';
  document.getElementById("input-pollobbq-pizza").value = 'POLLOBBQ';
  }
  
  function pollobbqfamiliaresdosF() {
  document.getElementById("input-pollobbq-precio").value = '17990';
  document.getElementById("input-pollobbq-cantidad").value = '2';
  }
  
  function pollobbqfamiliarestresF() {
  document.getElementById("input-pollobbq-precio").value = '28990';
  document.getElementById("input-pollobbq-cantidad").value = '3';
  }
  
  function pollobbqfamiliarescuatroF() {
  document.getElementById("input-pollobbq-precio").value = '35980';
  document.getElementById("input-pollobbq-cantidad").value = '4';
  }
  
  
  
  function pollobbqpizzaF() {
    document.getElementById("input-pollobbq-pizza").value = 'POLLOBBQS';
    document.getElementById("volver-pollobbq-html").hidden = true; 
    }
  
  
  
    function borrarpedidopollobbqF() {
      document.getElementById("input-pollobbq-pizza").value = '';
      document.getElementById("input-pollobbq-tamaño").value = '';
      document.getElementById("input-pollobbq-cantidad").value = '';
      document.getElementById("input-pollobbq-precio").value = '';
      document.getElementById("input-pollobbq-masa").value = '';
      document.getElementById("inputs-pollobbq").hidden = true;
      document.getElementById("finalizar-pedido-button").hidden = true; 
      document.getElementById("volver-pollobbq").hidden = true; 
      }
  
  
  
  
      function agregaralpedidopollobbqF() {
        document.getElementById("inputs-pollobbq").hidden = false;
        document.getElementById("finalizar-pedido-button").hidden = false;
        var nota=document.getElementById("instrucciones-pollobbq").value;
        document.getElementById("input-pollobbq-instrucciones").value= nota;
        document.getElementById("volver-pollobbq-html").hidden = true; 
  
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
  
  
  
        
  
      function volverpollobbqF() {
        document.getElementById("volver-pollobbq-html").hidden = false; 
      }
  
      // FIN POLLOBBQ 
  
  
      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  