// ITALIANA



function cambiarcolorfamiliaritalianaF() {
  document.getElementById("familiaritaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiaritaliana").style.color = "#fff"
  document.getElementById("familiaritaliana").style.fontSize = "170%"
  document.getElementById("medianaitaliana").style.background = "#fff"
  document.getElementById("medianaitaliana").style.color = "#ff7700"
  document.getElementById("medianaitaliana").style.fontSize = "150%"
  document.getElementById("input-italiana-tamaño").value = 'FAMILIARES';

}

function cambiarcolormedianaitalianaF() {
  document.getElementById("medianaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianaitaliana").style.color = "#fff"
  document.getElementById("medianaitaliana").style.fontSize = "170%"
  document.getElementById("familiaritaliana").style.background = "#fff"
  document.getElementById("familiaritaliana").style.color = "#ff7700"
  document.getElementById("familiaritaliana").style.fontSize = "150%"
  document.getElementById("input-italiana-tamaño").value = 'MEDIANAS';
}



function cambiarcolorsalsapizzaitalianaF() {
  document.getElementById("salsapizzaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzaitaliana").style.color = "#fff"
  document.getElementById("salsapizzaitaliana").style.fontSize = "170%"
  document.getElementById("salsabbqitaliana").style.background = "#fff"
  document.getElementById("salsabbqitaliana").style.color = "#ff7700"
  document.getElementById("salsabbqitaliana").style.fontSize = "150%"

}

function cambiarcolorsalsabbqitalianaF() {
  document.getElementById("salsabbqitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqitaliana").style.color = "#fff"
  document.getElementById("salsabbqitaliana").style.fontSize = "170%"
  document.getElementById("salsapizzaitaliana").style.background = "#fff"
  document.getElementById("salsapizzaitaliana").style.color = "#ff7700"
  document.getElementById("salsapizzaitaliana").style.fontSize = "150%"
}








function cambiarcolormasatradicionalitalianaF() {
  document.getElementById("masadelgadaitaliana").style.background = "#fff"
  document.getElementById("masadelgadaitaliana").style.color = "#ff7700"
  document.getElementById("masadelgadaitaliana").style.fontSize = "150%"
  document.getElementById("masatradicionalitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalitaliana").style.color = "#fff"
  document.getElementById("masatradicionalitaliana").style.fontSize = "170%"
  document.getElementById("input-italiana-masa").value = 'MASA TRADICIONAL';
  document.getElementById("finalizarpedido-italianaF").hidden = false;
}

function cambiarcolormasadelgadaitalianaF() {
  document.getElementById("masatradicionalitaliana").style.background = "#fff"
  document.getElementById("masatradicionalitaliana").style.color = "#ff7700"
  document.getElementById("masatradicionalitaliana").style.fontSize = "150%"
  document.getElementById("masadelgadaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadaitaliana").style.color = "#fff"
  document.getElementById("masadelgadaitaliana").style.fontSize = "170%"
  document.getElementById("input-italiana-masa").value = 'MASA DELGADA';
  document.getElementById("finalizarpedido-italianaF").hidden = false;

}





function italianamedianasF() {
document.getElementById("input-italiana-precio").value = '7495';
document.getElementById("input-italiana-cantidad").value = '1';
document.getElementById("input-italiana-tamaño").value = 'MEDIANA';
document.getElementById("input-italiana-pizza").value = 'ITALIANA';

}

function italianamedianasdosF() {
document.getElementById("input-italiana-precio").value = '14990';
document.getElementById("input-italiana-cantidad").value = '2';


}

function italianamedianastresF() {
document.getElementById("input-italiana-precio").value = '23980';
document.getElementById("input-italiana-cantidad").value = '3';

}

function italianamedianascuatroF() {
document.getElementById("input-italiana-precio").value = '29980';
document.getElementById("input-italiana-cantidad").value = '4';

}






function italianafamiliaresF() {
  document.getElementById("input-italiana-precio").value = '$7.000';
  document.getElementById("input-italiana-cantidad").value = '1';
  document.getElementById("input-italiana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-italiana-pizza").value = 'ITALIANA';
  }
  
  function italianafamiliaresdosF() {
  document.getElementById("input-italiana-precio").value = '$17.990';
  document.getElementById("input-italiana-cantidad").value = '2';
  }
  
  function italianafamiliarestresF() {
  document.getElementById("input-italiana-precio").value = '$28.990';
  document.getElementById("input-italiana-cantidad").value = '3';
  }
  
  function italianafamiliarescuatroF() {
  document.getElementById("input-italiana-precio").value = '$35.980';
  document.getElementById("input-italiana-cantidad").value = '4';
  }
  
  
  
  function italianapizzaF() {
    document.getElementById("input-italiana-pizza").value = 'ITALIANAS';
    document.getElementById("volver-italiana-html").hidden = true; 
    }
  
  
  
    function borrarpedidoitalianaF() {
      document.getElementById("input-italiana-pizza").value = '';
      document.getElementById("input-italiana-tamaño").value = '';
      document.getElementById("input-italiana-cantidad").value = '';
      document.getElementById("input-italiana-precio").value = '';
      document.getElementById("input-italiana-masa").value = '';
      document.getElementById("inputs-italiana").hidden = true;
      document.getElementById("finalizar-pedido-button").hidden = true; 
      document.getElementById("volver-italiana").hidden = true; 
      }
  
  
  
  
      function agregaralpedidoitalianaF() {
        document.getElementById("finalizarpedido-italiana").hidden = false;
        document.getElementById("finalizarpedido-italianaF").hidden = true;
        document.getElementById("volver-italiana-html").hidden = true; 
        document.getElementById("1italianafamiliaresF").hidden = true;
        document.getElementById("2italianafamiliaresF").hidden = true;
        document.getElementById("3italianafamiliaresF").hidden = true;
        document.getElementById("4italianafamiliaresF").hidden = true;
        document.getElementById("1italianamedianasF").hidden = true;
        document.getElementById("2italianamedianasF").hidden = true;
        document.getElementById("3italianamedianasF").hidden = true;
        document.getElementById("4italianamedianasF").hidden = true;
        document.getElementById("1italianafamiliares").hidden = false;
        document.getElementById("2italianafamiliares").hidden = false;
        document.getElementById("3italianafamiliares").hidden = false;
        document.getElementById("4italianafamiliares").hidden = false;
        document.getElementById("1italianamedianas").hidden = false;
        document.getElementById("2italianamedianas").hidden = false;
        document.getElementById("3italianamedianas").hidden = false;
        document.getElementById("4italianamedianas").hidden = false;
        document.getElementById("inputs-italiana").hidden = false;
        document.getElementById("finalizar-pedido-button").hidden = false;
        var nota=document.getElementById("instrucciones-italiana").value;
        document.getElementById("input-italiana-instrucciones").value= nota;



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



      

    function volveritalianaF() {
      document.getElementById("volver-italiana-html").hidden = false; 
    }

    // FIN ITALIANA 


    




























