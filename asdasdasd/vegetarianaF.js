// VEGETARIANA



function cambiarcolorfamiliarvegetarianaF() {
    document.getElementById("familiarvegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("familiarvegetariana").style.color = "#fff"
    document.getElementById("familiarvegetariana").style.fontSize = "170%"
    document.getElementById("medianavegetariana").style.background = "#fff"
    document.getElementById("medianavegetariana").style.color = "#ff7700"
    document.getElementById("medianavegetariana").style.fontSize = "150%"
    document.getElementById("input-vegetariana-tamaño").value = 'FAMILIARES';
  
  }
  
  function cambiarcolormedianavegetarianaF() {
    document.getElementById("medianavegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("medianavegetariana").style.color = "#fff"
    document.getElementById("medianavegetariana").style.fontSize = "170%"
    document.getElementById("familiarvegetariana").style.background = "#fff"
    document.getElementById("familiarvegetariana").style.color = "#ff7700"
    document.getElementById("familiarvegetariana").style.fontSize = "150%"
    document.getElementById("input-vegetariana-tamaño").value = 'MEDIANAS';
  }
  
  
  
  function cambiarcolorsalsapizzavegetarianaF() {
    document.getElementById("salsapizzavegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsapizzavegetariana").style.color = "#fff"
    document.getElementById("salsapizzavegetariana").style.fontSize = "170%"
    document.getElementById("salsabbqvegetariana").style.background = "#fff"
    document.getElementById("salsabbqvegetariana").style.color = "#ff7700"
    document.getElementById("salsabbqvegetariana").style.fontSize = "150%"
  
  }
  
  function cambiarcolorsalsabbqvegetarianaF() {
    document.getElementById("salsabbqvegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("salsabbqvegetariana").style.color = "#fff"
    document.getElementById("salsabbqvegetariana").style.fontSize = "170%"
    document.getElementById("salsapizzavegetariana").style.background = "#fff"
    document.getElementById("salsapizzavegetariana").style.color = "#ff7700"
    document.getElementById("salsapizzavegetariana").style.fontSize = "150%"
  }
  
  
  
  
  
  
  
  
  function cambiarcolormasatradicionalvegetarianaF() {
    document.getElementById("masadelgadavegetariana").style.background = "#fff"
    document.getElementById("masadelgadavegetariana").style.color = "#ff7700"
    document.getElementById("masadelgadavegetariana").style.fontSize = "150%"
    document.getElementById("masatradicionalvegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masatradicionalvegetariana").style.color = "#fff"
    document.getElementById("masatradicionalvegetariana").style.fontSize = "170%"
    document.getElementById("input-vegetariana-masa").value = 'MASA TRADICIONAL';
    document.getElementById("finalizarpedido-vegetariana").hidden = false;
  
  }
  
  function cambiarcolormasadelgadavegetarianaF() {
    document.getElementById("masatradicionalvegetariana").style.background = "#fff"
    document.getElementById("masatradicionalvegetariana").style.color = "#ff7700"
    document.getElementById("masatradicionalvegetariana").style.fontSize = "150%"
    document.getElementById("masadelgadavegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
    document.getElementById("masadelgadavegetariana").style.color = "#fff"
    document.getElementById("masadelgadavegetariana").style.fontSize = "170%"
    document.getElementById("input-vegetariana-masa").value = 'MASA DELGADA';
    document.getElementById("finalizarpedido-vegetariana").hidden = false;
  }
  
  
  
  
  
  function vegetarianamedianasF() {
  document.getElementById("input-vegetariana-precio").value = '7495';
  document.getElementById("input-vegetariana-cantidad").value = '1';
  document.getElementById("input-vegetariana-tamaño").value = 'MEDIANA';
  document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANA';
    document.getElementById("finalizarpedido-vegetariana").hidden = false;
  
  }
  
  function vegetarianamedianasdosF() {
  document.getElementById("input-vegetariana-precio").value = '14990';
  document.getElementById("input-vegetariana-cantidad").value = '2';
  
  
  }
  
  function vegetarianamedianastresF() {
  document.getElementById("input-vegetariana-precio").value = '23980';
  document.getElementById("input-vegetariana-cantidad").value = '3';
  
  }
  
  function vegetarianamedianascuatroF() {
  document.getElementById("input-vegetariana-precio").value = '29980';
  document.getElementById("input-vegetariana-cantidad").value = '4';
  
  }
  
  
  
  
  
  
  function vegetarianafamiliaresF() {
  document.getElementById("input-vegetariana-precio").value = '8995';
  document.getElementById("input-vegetariana-cantidad").value = '1';
  document.getElementById("input-vegetariana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANA';
  }
  
  function vegetarianafamiliaresdosF() {
  document.getElementById("input-vegetariana-precio").value = '17990';
  document.getElementById("input-vegetariana-cantidad").value = '2';
  }
  
  function vegetarianafamiliarestresF() {
  document.getElementById("input-vegetariana-precio").value = '28990';
  document.getElementById("input-vegetariana-cantidad").value = '3';
  }
  
  function vegetarianafamiliarescuatroF() {
  document.getElementById("input-vegetariana-precio").value = '35980';
  document.getElementById("input-vegetariana-cantidad").value = '4';
  }
  
  
  
  function vegetarianapizzaF() {
    document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANAS';
    document.getElementById("volver-vegetariana-html").hidden = true; 
    }
  
  
  
    function borrarpedidovegetarianaF() {
      document.getElementById("input-vegetariana-pizza").value = '';
      document.getElementById("input-vegetariana-tamaño").value = '';
      document.getElementById("input-vegetariana-cantidad").value = '';
      document.getElementById("input-vegetariana-precio").value = '';
      document.getElementById("input-vegetariana-masa").value = '';
      document.getElementById("inputs-vegetariana").hidden = true;
      document.getElementById("finalizar-pedido-button").hidden = true; 
      document.getElementById("volver-vegetariana").hidden = true; 
      }
  
  
  
  
      function agregaralpedidovegetarianaF() {
        document.getElementById("inputs-vegetariana").hidden = false;
        document.getElementById("finalizar-pedido-button").hidden = false;
        var nota=document.getElementById("instrucciones-vegetariana").value;
        document.getElementById("input-vegetariana-instrucciones").value= nota;
        document.getElementById("volver-vegetariana-html").hidden = true; 
  
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
  
  
  
        
  
      function volvervegetarianaF() {
        document.getElementById("volver-vegetariana-html").hidden = false; 
      }
  
      // FIN VEGETARIANA 
  
  
      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  