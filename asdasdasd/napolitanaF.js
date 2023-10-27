// NAPOLITANA



function cambiarcolorfamiliarnapolitanaF() {
    document.getElementById("familiarnapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("familiarnapolitana").style.color = "#fff"
    document.getElementById("familiarnapolitana").style.fontSize = "170%"
    document.getElementById("mediananapolitana").style.background = "#fff"
    document.getElementById("mediananapolitana").style.color = "#ff7700"
    document.getElementById("mediananapolitana").style.fontSize = "150%"
    document.getElementById("input-napolitana-tamaño").value = 'FAMILIARES';
  
  }
  
  function cambiarcolormediananapolitanaF() {
    document.getElementById("mediananapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("mediananapolitana").style.color = "#fff"
    document.getElementById("mediananapolitana").style.fontSize = "170%"
    document.getElementById("familiarnapolitana").style.background = "#fff"
    document.getElementById("familiarnapolitana").style.color = "#ff7700"
    document.getElementById("familiarnapolitana").style.fontSize = "150%"
    document.getElementById("input-napolitana-tamaño").value = 'MEDIANAS';
  }
  
  
  
  function cambiarcolorsalsapizzanapolitanaF() {
    document.getElementById("salsapizzanapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsapizzanapolitana").style.color = "#fff"
    document.getElementById("salsapizzanapolitana").style.fontSize = "170%"
    document.getElementById("salsabbqnapolitana").style.background = "#fff"
    document.getElementById("salsabbqnapolitana").style.color = "#ff7700"
    document.getElementById("salsabbqnapolitana").style.fontSize = "150%"
  
  }
  
  function cambiarcolorsalsabbqnapolitanaF() {
    document.getElementById("salsabbqnapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsabbqnapolitana").style.color = "#fff"
    document.getElementById("salsabbqnapolitana").style.fontSize = "170%"
    document.getElementById("salsapizzanapolitana").style.background = "#fff"
    document.getElementById("salsapizzanapolitana").style.color = "#ff7700"
    document.getElementById("salsapizzanapolitana").style.fontSize = "150%"
  }
  
  
  
  
  
  
  
  
  function cambiarcolormasatradicionalnapolitanaF() {
    document.getElementById("masadelgadanapolitana").style.background = "#fff"
    document.getElementById("masadelgadanapolitana").style.color = "#ff7700"
    document.getElementById("masadelgadanapolitana").style.fontSize = "150%"
    document.getElementById("masatradicionalnapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masatradicionalnapolitana").style.color = "#fff"
    document.getElementById("masatradicionalnapolitana").style.fontSize = "170%"
    document.getElementById("input-napolitana-masa").value = 'MASA TRADICIONAL';
    document.getElementById("finalizarpedido-napolitana").hidden = false;
  
  }
  
  function cambiarcolormasadelgadanapolitanaF() {
    document.getElementById("masatradicionalnapolitana").style.background = "#fff"
    document.getElementById("masatradicionalnapolitana").style.color = "#ff7700"
    document.getElementById("masatradicionalnapolitana").style.fontSize = "150%"
    document.getElementById("masadelgadanapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masadelgadanapolitana").style.color = "#fff"
    document.getElementById("masadelgadanapolitana").style.fontSize = "170%"
    document.getElementById("input-napolitana-masa").value = 'MASA DELGADA';
    document.getElementById("finalizarpedido-napolitana").hidden = false;
  }
  
  
  
  
  
  function napolitanamedianasF() {
  document.getElementById("input-napolitana-precio").value = '7495';
  document.getElementById("input-napolitana-cantidad").value = '1';
  document.getElementById("input-napolitana-tamaño").value = 'MEDIANA';
  document.getElementById("input-napolitana-pizza").value = 'NAPOLITANA';
    document.getElementById("finalizarpedido-napolitana").hidden = false;
  
  }
  
  function napolitanamedianasdosF() {
  document.getElementById("input-napolitana-precio").value = '14990';
  document.getElementById("input-napolitana-cantidad").value = '2';
  
  
  }
  
  function napolitanamedianastresF() {
  document.getElementById("input-napolitana-precio").value = '23980';
  document.getElementById("input-napolitana-cantidad").value = '3';
  
  }
  
  function napolitanamedianascuatroF() {
  document.getElementById("input-napolitana-precio").value = '29980';
  document.getElementById("input-napolitana-cantidad").value = '4';
  
  }
  
  
  
  
  
  
  function napolitanafamiliaresF() {
  document.getElementById("input-napolitana-precio").value = '8995';
  document.getElementById("input-napolitana-cantidad").value = '1';
  document.getElementById("input-napolitana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-napolitana-pizza").value = 'NAPOLITANA';
  }
  
  function napolitanafamiliaresdosF() {
  document.getElementById("input-napolitana-precio").value = '17990';
  document.getElementById("input-napolitana-cantidad").value = '2';
  }
  
  function napolitanafamiliarestresF() {
  document.getElementById("input-napolitana-precio").value = '28990';
  document.getElementById("input-napolitana-cantidad").value = '3';
  }
  
  function napolitanafamiliarescuatroF() {
  document.getElementById("input-napolitana-precio").value = '35980';
  document.getElementById("input-napolitana-cantidad").value = '4';
  }
  
  
  
  function napolitanapizzaF() {
    document.getElementById("input-napolitana-pizza").value = 'NAPOLITANAS';
    document.getElementById("volver-napolitana-html").hidden = true; 
    }
  
  
  
    function borrarpedidonapolitanaF() {
      document.getElementById("input-napolitana-pizza").value = '';
      document.getElementById("input-napolitana-tamaño").value = '';
      document.getElementById("input-napolitana-cantidad").value = '';
      document.getElementById("input-napolitana-precio").value = '';
      document.getElementById("input-napolitana-masa").value = '';
      document.getElementById("inputs-napolitana").hidden = true;
      document.getElementById("finalizar-pedido-button").hidden = true; 
      document.getElementById("volver-napolitana").hidden = true; 
      }
  
  
  
  
      function agregaralpedidonapolitanaF() {
        document.getElementById("inputs-napolitana").hidden = false;
        document.getElementById("finalizar-pedido-button").hidden = false;
        var nota=document.getElementById("instrucciones-napolitana").value;
        document.getElementById("input-napolitana-instrucciones").value= nota;
        document.getElementById("volver-napolitana-html").hidden = true; 
  
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
  
  
  
        
  
      function volvernapolitanaF() {
        document.getElementById("volver-napolitana-html").hidden = false; 
      }
  
      // FIN NAPOLITANA 
  
  
      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  