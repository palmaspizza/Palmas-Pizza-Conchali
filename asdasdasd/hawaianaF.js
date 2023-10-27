// HAWAIANA



function cambiarcolorfamiliarhawaianaF() {
    document.getElementById("familiarhawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("familiarhawaiana").style.color = "#fff"
    document.getElementById("familiarhawaiana").style.fontSize = "170%"
    document.getElementById("medianahawaiana").style.background = "#fff"
    document.getElementById("medianahawaiana").style.color = "#ff7700"
    document.getElementById("medianahawaiana").style.fontSize = "150%"
    document.getElementById("input-hawaiana-tamaño").value = 'FAMILIARES';
  
  }
  
  function cambiarcolormedianahawaianaF() {
    document.getElementById("medianahawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("medianahawaiana").style.color = "#fff"
    document.getElementById("medianahawaiana").style.fontSize = "170%"
    document.getElementById("familiarhawaiana").style.background = "#fff"
    document.getElementById("familiarhawaiana").style.color = "#ff7700"
    document.getElementById("familiarhawaiana").style.fontSize = "150%"
    document.getElementById("input-hawaiana-tamaño").value = 'MEDIANAS';
  }
  
  
  
  function cambiarcolorsalsapizzahawaianaF() {
    document.getElementById("salsapizzahawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsapizzahawaiana").style.color = "#fff"
    document.getElementById("salsapizzahawaiana").style.fontSize = "170%"
    document.getElementById("salsabbqhawaiana").style.background = "#fff"
    document.getElementById("salsabbqhawaiana").style.color = "#ff7700"
    document.getElementById("salsabbqhawaiana").style.fontSize = "150%"
  
  }
  
  function cambiarcolorsalsabbqhawaianaF() {
    document.getElementById("salsabbqhawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsabbqhawaiana").style.color = "#fff"
    document.getElementById("salsabbqhawaiana").style.fontSize = "170%"
    document.getElementById("salsapizzahawaiana").style.background = "#fff"
    document.getElementById("salsapizzahawaiana").style.color = "#ff7700"
    document.getElementById("salsapizzahawaiana").style.fontSize = "150%"
  }
  
  
  
  
  
  
  
  
  function cambiarcolormasatradicionalhawaianaF() {
    document.getElementById("masadelgadahawaiana").style.background = "#fff"
    document.getElementById("masadelgadahawaiana").style.color = "#ff7700"
    document.getElementById("masadelgadahawaiana").style.fontSize = "150%"
    document.getElementById("masatradicionalhawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masatradicionalhawaiana").style.color = "#fff"
    document.getElementById("masatradicionalhawaiana").style.fontSize = "170%"
    document.getElementById("input-hawaiana-masa").value = 'MASA TRADICIONAL';
    document.getElementById("finalizarpedido-hawaiana").hidden = false;
  
  }
  
  function cambiarcolormasadelgadahawaianaF() {
    document.getElementById("masatradicionalhawaiana").style.background = "#fff"
    document.getElementById("masatradicionalhawaiana").style.color = "#ff7700"
    document.getElementById("masatradicionalhawaiana").style.fontSize = "150%"
    document.getElementById("masadelgadahawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masadelgadahawaiana").style.color = "#fff"
    document.getElementById("masadelgadahawaiana").style.fontSize = "170%"
    document.getElementById("input-hawaiana-masa").value = 'MASA DELGADA';
    document.getElementById("finalizarpedido-hawaiana").hidden = false;
  }
  
  
  
  
  
  function hawaianamedianasF() {
  document.getElementById("input-hawaiana-precio").value = '7495';
  document.getElementById("input-hawaiana-cantidad").value = '1';
  document.getElementById("input-hawaiana-tamaño").value = 'MEDIANA';
  document.getElementById("input-hawaiana-pizza").value = 'HAWAIANA';
    document.getElementById("finalizarpedido-hawaiana").hidden = false;
  
  }
  
  function hawaianamedianasdosF() {
  document.getElementById("input-hawaiana-precio").value = '14990';
  document.getElementById("input-hawaiana-cantidad").value = '2';
  
  
  }
  
  function hawaianamedianastresF() {
  document.getElementById("input-hawaiana-precio").value = '23980';
  document.getElementById("input-hawaiana-cantidad").value = '3';
  
  }
  
  function hawaianamedianascuatroF() {
  document.getElementById("input-hawaiana-precio").value = '29980';
  document.getElementById("input-hawaiana-cantidad").value = '4';
  
  }
  
  
  
  
  
  
  function hawaianafamiliaresF() {
  document.getElementById("input-hawaiana-precio").value = '8995';
  document.getElementById("input-hawaiana-cantidad").value = '1';
  document.getElementById("input-hawaiana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-hawaiana-pizza").value = 'HAWAIANA';
  }
  
  function hawaianafamiliaresdosF() {
  document.getElementById("input-hawaiana-precio").value = '17990';
  document.getElementById("input-hawaiana-cantidad").value = '2';
  }
  
  function hawaianafamiliarestresF() {
  document.getElementById("input-hawaiana-precio").value = '28990';
  document.getElementById("input-hawaiana-cantidad").value = '3';
  }
  
  function hawaianafamiliarescuatroF() {
  document.getElementById("input-hawaiana-precio").value = '35980';
  document.getElementById("input-hawaiana-cantidad").value = '4';
  }
  
  
  
  function hawaianapizzaF() {
    document.getElementById("input-hawaiana-pizza").value = 'HAWAIANAS';
    document.getElementById("volver-hawaiana-html").hidden = true; 
    }
  
  
  
    function borrarpedidohawaianaF() {
      document.getElementById("input-hawaiana-pizza").value = '';
      document.getElementById("input-hawaiana-tamaño").value = '';
      document.getElementById("input-hawaiana-cantidad").value = '';
      document.getElementById("input-hawaiana-precio").value = '';
      document.getElementById("input-hawaiana-masa").value = '';
      document.getElementById("inputs-hawaiana").hidden = true;
      document.getElementById("finalizar-pedido-button").hidden = true; 
      document.getElementById("volver-hawaiana").hidden = true; 
      }
  
  
  
  
      function agregaralpedidohawaianaF() {
        document.getElementById("inputs-hawaiana").hidden = false;
        document.getElementById("finalizar-pedido-button").hidden = false;
        var nota=document.getElementById("instrucciones-hawaiana").value;
        document.getElementById("input-hawaiana-instrucciones").value= nota;
        document.getElementById("volver-hawaiana-html").hidden = true; 
  
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
  
  
  
        
  
      function volverhawaianaF() {
        document.getElementById("volver-hawaiana-html").hidden = false; 
      }
  
      // FIN HAWAIANA 
  
  
      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  