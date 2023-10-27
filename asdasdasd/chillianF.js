// CHILLIAN



function cambiarcolorfamiliarchillianF() {
    document.getElementById("familiarchillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("familiarchillian").style.color = "#fff"
    document.getElementById("familiarchillian").style.fontSize = "170%"
    document.getElementById("medianachillian").style.background = "#fff"
    document.getElementById("medianachillian").style.color = "#ff7700"
    document.getElementById("medianachillian").style.fontSize = "150%"
    document.getElementById("input-chillian-tamaño").value = 'FAMILIARES';
  
  }
  
  function cambiarcolormedianachillianF() {
    document.getElementById("medianachillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("medianachillian").style.color = "#fff"
    document.getElementById("medianachillian").style.fontSize = "170%"
    document.getElementById("familiarchillian").style.background = "#fff"
    document.getElementById("familiarchillian").style.color = "#ff7700"
    document.getElementById("familiarchillian").style.fontSize = "150%"
    document.getElementById("input-chillian-tamaño").value = 'MEDIANAS';
  }
  
  
  
  function cambiarcolorsalsapizzachillianF() {
    document.getElementById("salsapizzachillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsapizzachillian").style.color = "#fff"
    document.getElementById("salsapizzachillian").style.fontSize = "170%"
    document.getElementById("salsabbqchillian").style.background = "#fff"
    document.getElementById("salsabbqchillian").style.color = "#ff7700"
    document.getElementById("salsabbqchillian").style.fontSize = "150%"
  
  }
  
  function cambiarcolorsalsabbqchillianF() {
    document.getElementById("salsabbqchillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsabbqchillian").style.color = "#fff"
    document.getElementById("salsabbqchillian").style.fontSize = "170%"
    document.getElementById("salsapizzachillian").style.background = "#fff"
    document.getElementById("salsapizzachillian").style.color = "#ff7700"
    document.getElementById("salsapizzachillian").style.fontSize = "150%"
  }
  
  
  
  
  
  
  
  
  function cambiarcolormasatradicionalchillianF() {
    document.getElementById("masadelgadachillian").style.background = "#fff"
    document.getElementById("masadelgadachillian").style.color = "#ff7700"
    document.getElementById("masadelgadachillian").style.fontSize = "150%"
    document.getElementById("masatradicionalchillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masatradicionalchillian").style.color = "#fff"
    document.getElementById("masatradicionalchillian").style.fontSize = "170%"
    document.getElementById("input-chillian-masa").value = 'MASA TRADICIONAL';
    document.getElementById("finalizarpedido-chillian").hidden = false;
  
  }
  
  function cambiarcolormasadelgadachillianF() {
    document.getElementById("masatradicionalchillian").style.background = "#fff"
    document.getElementById("masatradicionalchillian").style.color = "#ff7700"
    document.getElementById("masatradicionalchillian").style.fontSize = "150%"
    document.getElementById("masadelgadachillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masadelgadachillian").style.color = "#fff"
    document.getElementById("masadelgadachillian").style.fontSize = "170%"
    document.getElementById("input-chillian-masa").value = 'MASA DELGADA';
    document.getElementById("finalizarpedido-chillian").hidden = false;
  }
  
  
  
  
  
  function chillianmedianasF() {
  document.getElementById("input-chillian-precio").value = '7495';
  document.getElementById("input-chillian-cantidad").value = '1';
  document.getElementById("input-chillian-tamaño").value = 'MEDIANA';
  document.getElementById("input-chillian-pizza").value = 'CHILLIAN';
    document.getElementById("finalizarpedido-chillian").hidden = false;
  
  }
  
  function chillianmedianasdosF() {
  document.getElementById("input-chillian-precio").value = '14990';
  document.getElementById("input-chillian-cantidad").value = '2';
  
  
  }
  
  function chillianmedianastresF() {
  document.getElementById("input-chillian-precio").value = '23980';
  document.getElementById("input-chillian-cantidad").value = '3';
  
  }
  
  function chillianmedianascuatroF() {
  document.getElementById("input-chillian-precio").value = '29980';
  document.getElementById("input-chillian-cantidad").value = '4';
  
  }
  
  
  
  
  
  
  function chillianfamiliaresF() {
  document.getElementById("input-chillian-precio").value = '8995';
  document.getElementById("input-chillian-cantidad").value = '1';
  document.getElementById("input-chillian-tamaño").value = 'FAMILIAR';
  document.getElementById("input-chillian-pizza").value = 'CHILLIAN';
  }
  
  function chillianfamiliaresdosF() {
  document.getElementById("input-chillian-precio").value = '17990';
  document.getElementById("input-chillian-cantidad").value = '2';
  }
  
  function chillianfamiliarestresF() {
  document.getElementById("input-chillian-precio").value = '28990';
  document.getElementById("input-chillian-cantidad").value = '3';
  }
  
  function chillianfamiliarescuatroF() {
  document.getElementById("input-chillian-precio").value = '35980';
  document.getElementById("input-chillian-cantidad").value = '4';
  }
  
  
  
  function chillianpizzaF() {
    document.getElementById("input-chillian-pizza").value = 'CHILLIANS';
    document.getElementById("volver-chillian-html").hidden = true; 
    }
  
  
  
    function borrarpedidochillianF() {
      document.getElementById("input-chillian-pizza").value = '';
      document.getElementById("input-chillian-tamaño").value = '';
      document.getElementById("input-chillian-cantidad").value = '';
      document.getElementById("input-chillian-precio").value = '';
      document.getElementById("input-chillian-masa").value = '';
      document.getElementById("inputs-chillian").hidden = true;
      document.getElementById("finalizar-pedido-button").hidden = true; 
      document.getElementById("volver-chillian").hidden = true; 
      }
  
  
  
  
      function agregaralpedidochillianF() {
        document.getElementById("inputs-chillian").hidden = false;
        document.getElementById("finalizar-pedido-button").hidden = false;
        var nota=document.getElementById("instrucciones-chillian").value;
        document.getElementById("input-chillian-instrucciones").value= nota;
        document.getElementById("volver-chillian-html").hidden = true; 
  
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
  
  
  
        
  
      function volverchillianF() {
        document.getElementById("volver-chillian-html").hidden = false; 
      }
  
      // FIN CHILLIAN 
  
  
      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  