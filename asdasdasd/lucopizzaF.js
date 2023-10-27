// LUCOPIZZA



function cambiarcolorfamiliarlucopizzaF() {
    document.getElementById("familiarlucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("familiarlucopizza").style.color = "#fff"
    document.getElementById("familiarlucopizza").style.fontSize = "170%"
    document.getElementById("medianalucopizza").style.background = "#fff"
    document.getElementById("medianalucopizza").style.color = "#ff7700"
    document.getElementById("medianalucopizza").style.fontSize = "150%"
    document.getElementById("input-lucopizza-tamaño").value = 'FAMILIARES';
  
  }
  
  function cambiarcolormedianalucopizzaF() {
    document.getElementById("medianalucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("medianalucopizza").style.color = "#fff"
    document.getElementById("medianalucopizza").style.fontSize = "170%"
    document.getElementById("familiarlucopizza").style.background = "#fff"
    document.getElementById("familiarlucopizza").style.color = "#ff7700"
    document.getElementById("familiarlucopizza").style.fontSize = "150%"
    document.getElementById("input-lucopizza-tamaño").value = 'MEDIANAS';
  }
  
  
  
  function cambiarcolorsalsapizzalucopizzaF() {
    document.getElementById("salsapizzalucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsapizzalucopizza").style.color = "#fff"
    document.getElementById("salsapizzalucopizza").style.fontSize = "170%"
    document.getElementById("salsabbqlucopizza").style.background = "#fff"
    document.getElementById("salsabbqlucopizza").style.color = "#ff7700"
    document.getElementById("salsabbqlucopizza").style.fontSize = "150%"
  
  }
  
  function cambiarcolorsalsabbqlucopizzaF() {
    document.getElementById("salsabbqlucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsabbqlucopizza").style.color = "#fff"
    document.getElementById("salsabbqlucopizza").style.fontSize = "170%"
    document.getElementById("salsapizzalucopizza").style.background = "#fff"
    document.getElementById("salsapizzalucopizza").style.color = "#ff7700"
    document.getElementById("salsapizzalucopizza").style.fontSize = "150%"
  }
  
  
  
  
  
  
  
  
  function cambiarcolormasatradicionallucopizzaF() {
    document.getElementById("masadelgadalucopizza").style.background = "#fff"
    document.getElementById("masadelgadalucopizza").style.color = "#ff7700"
    document.getElementById("masadelgadalucopizza").style.fontSize = "150%"
    document.getElementById("masatradicionallucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masatradicionallucopizza").style.color = "#fff"
    document.getElementById("masatradicionallucopizza").style.fontSize = "170%"
    document.getElementById("input-lucopizza-masa").value = 'MASA TRADICIONAL';
    document.getElementById("finalizarpedido-lucopizza").hidden = false;
  
  }
  
  function cambiarcolormasadelgadalucopizzaF() {
    document.getElementById("masatradicionallucopizza").style.background = "#fff"
    document.getElementById("masatradicionallucopizza").style.color = "#ff7700"
    document.getElementById("masatradicionallucopizza").style.fontSize = "150%"
    document.getElementById("masadelgadalucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masadelgadalucopizza").style.color = "#fff"
    document.getElementById("masadelgadalucopizza") = "170%"
    document.getElementById("input-lucopizza-masa").value = 'MASA DELGADA';
    document.getElementById("finalizarpedido-lucopizza").hidden = false;
  }
  
  
  
  
  
  function lucopizzamedianasF() {
  document.getElementById("input-lucopizza-precio").value = '7495';
  document.getElementById("input-lucopizza-cantidad").value = '1';
  document.getElementById("input-lucopizza-tamaño").value = 'MEDIANA';
  document.getElementById("input-lucopizza-pizza").value = 'LUCOPIZZA';
    document.getElementById("finalizarpedido-lucopizza").hidden = false;
  
  }
  
  function lucopizzamedianasdosF() {
  document.getElementById("input-lucopizza-precio").value = '14990';
  document.getElementById("input-lucopizza-cantidad").value = '2';
  
  
  }
  
  function lucopizzamedianastresF() {
  document.getElementById("input-lucopizza-precio").value = '23980';
  document.getElementById("input-lucopizza-cantidad").value = '3';
  
  }
  
  function lucopizzamedianascuatroF() {
  document.getElementById("input-lucopizza-precio").value = '29980';
  document.getElementById("input-lucopizza-cantidad").value = '4';
  
  }
  
  
  
  
  
  
  function lucopizzafamiliaresF() {
  document.getElementById("input-lucopizza-precio").value = '8995';
  document.getElementById("input-lucopizza-cantidad").value = '1';
  document.getElementById("input-lucopizza-tamaño").value = 'FAMILIAR';
  document.getElementById("input-lucopizza-pizza").value = 'LUCOPIZZA';
  }
  
  function lucopizzafamiliaresdosF() {
  document.getElementById("input-lucopizza-precio").value = '17990';
  document.getElementById("input-lucopizza-cantidad").value = '2';
  }
  
  function lucopizzafamiliarestresF() {
  document.getElementById("input-lucopizza-precio").value = '28990';
  document.getElementById("input-lucopizza-cantidad").value = '3';
  }
  
  function lucopizzafamiliarescuatroF() {
  document.getElementById("input-lucopizza-precio").value = '35980';
  document.getElementById("input-lucopizza-cantidad").value = '4';
  }
  
  
  
  function lucopizzapizzaF() {
    document.getElementById("input-lucopizza-pizza").value = 'LUCOPIZZAS';
    document.getElementById("volver-lucopizza-html").hidden = true; 
    }
  
  
  
    function borrarpedidolucopizzaF() {
      document.getElementById("input-lucopizza-pizza").value = '';
      document.getElementById("input-lucopizza-tamaño").value = '';
      document.getElementById("input-lucopizza-cantidad").value = '';
      document.getElementById("input-lucopizza-precio").value = '';
      document.getElementById("input-lucopizza-masa").value = '';
      document.getElementById("inputs-lucopizza").hidden = true;
      document.getElementById("finalizar-pedido-button").hidden = true; 
      document.getElementById("volver-lucopizza").hidden = true; 
      }
  
  
  
  
      function agregaralpedidolucopizzaF() {
        document.getElementById("inputs-lucopizza").hidden = false;
        document.getElementById("finalizar-pedido-button").hidden = false;
        var nota=document.getElementById("instrucciones-lucopizza").value;
        document.getElementById("input-lucopizza-instrucciones").value= nota;
        document.getElementById("volver-lucopizza-html").hidden = true; 
  
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
  
  
  
        
  
      function volverlucopizzaF() {
        document.getElementById("volver-lucopizza-html").hidden = false; 
      }
  
      // FIN LUCOPIZZA 
  
  
      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  