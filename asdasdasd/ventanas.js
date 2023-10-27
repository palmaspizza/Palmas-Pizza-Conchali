const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});



function borrarformadepago() {
  document.getElementById("formadepago").value = "";
  document.getElementById("pagacon").value = "";
}


function inputtransferencia() {
  document.getElementById("formadepago").value = "📱Transferencia📱";
}

function inputefectivo() {
  document.getElementById("formadepago").value = "💵Efectivo💵";
}







efectivo.addEventListener("click", cambiarcolorefectivo);
transferencia.addEventListener("click", cambiarcolortransferencia);


function cambiarcolorefectivo(){
  efectivo.classList.add("buttons");
  efectivo.classList.remove("button-select");
  transferencia.classList.add("button-select");
  transferencia.classList.remove("buttons");
  document.getElementById("efectivo").style.color = "#fff"
  document.getElementById("transferencia").style.color = "#ff7700"
  
}


function cambiarcolortransferencia(){
  transferencia.classList.remove("button-select");
  transferencia.classList.add("buttons");
  efectivo.classList.add("button-select");
  efectivo.classList.remove("buttons");
  document.getElementById("efectivo").style.color = "#ff7700"
  document.getElementById("transferencia").style.color = "#fff"
}






function cambiarcolorfamiliaritaliana(){
  document.getElementById("familiaritaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiaritaliana").style.color = "#fff"
  document.getElementById("familiaritaliana").style.fontSize = "170%"
  document.getElementById("medianaitaliana").style.background = "#fff"
  document.getElementById("medianaitaliana").style.color = "#ff7700"
  document.getElementById("medianaitaliana").style.fontSize = "150%"
  document.getElementById("input-italiana-tamaño").value = 'FAMILIARES';

}

function cambiarcolormedianaitaliana(){
  document.getElementById("medianaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianaitaliana").style.color = "#fff"
  document.getElementById("medianaitaliana").style.fontSize = "170%"
  document.getElementById("familiaritaliana").style.background = "#fff"
  document.getElementById("familiaritaliana").style.color = "#ff7700"
  document.getElementById("familiaritaliana").style.fontSize = "150%"
  document.getElementById("input-italiana-tamaño").value = 'MEDIANAS';
}



function cambiarcolorsalsapizzaitaliana(){
  document.getElementById("salsapizzaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzaitaliana").style.color = "#fff"
  document.getElementById("salsapizzaitaliana").style.fontSize = "170%"
  document.getElementById("salsabbqitaliana").style.background = "#fff"
  document.getElementById("salsabbqitaliana").style.color = "#ff7700"
  document.getElementById("salsabbqitaliana").style.fontSize = "150%"

}

function cambiarcolorsalsabbqitaliana(){
  document.getElementById("salsabbqitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqitaliana").style.color = "#fff"
  document.getElementById("salsabbqitaliana").style.fontSize = "170%"
  document.getElementById("salsapizzaitaliana").style.background = "#fff"
  document.getElementById("salsapizzaitaliana").style.color = "#ff7700"
  document.getElementById("salsapizzaitaliana").style.fontSize = "150%"
}








function cambiarcolormasatradicionalitaliana(){
  document.getElementById("masadelgadaitaliana").style.background = "#fff"
  document.getElementById("masadelgadaitaliana").style.color = "#ff7700"
  document.getElementById("masadelgadaitaliana").style.fontSize = "150%"
  document.getElementById("masatradicionalitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalitaliana").style.color = "#fff"
  document.getElementById("masatradicionalitaliana").style.fontSize = "170%"
  document.getElementById("input-italiana-masa").value = 'MASA TRADICIONAL';

}

function cambiarcolormasadelgadaitaliana(){
  document.getElementById("masatradicionalitaliana").style.background = "#fff"
  document.getElementById("masatradicionalitaliana").style.color = "#ff7700"
  document.getElementById("masatradicionalitaliana").style.fontSize = "150%"
  document.getElementById("masadelgadaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadaitaliana").style.color = "#fff"
  document.getElementById("masadelgadaitaliana").style.fontSize = "170%"
  document.getElementById("input-italiana-masa").value = 'MASA DELGADA';
}





function italianamedianas() {
document.getElementById("input-italiana-precio").value = '$8.990';
document.getElementById("input-italiana-cantidad").value = '1';
document.getElementById("input-italiana-tamaño").value = 'MEDIANA';
document.getElementById("input-italiana-pizza").value = 'ITALIANA';

}

function italianamedianasdos() {
document.getElementById("input-italiana-precio").value = '$14.990';
document.getElementById("input-italiana-cantidad").value = '2';


}

function italianamedianastres() {
document.getElementById("input-italiana-precio").value = '$23.980';
document.getElementById("input-italiana-cantidad").value = '3';

}

function italianamedianascuatro() {
document.getElementById("input-italiana-precio").value = '$29.980';
document.getElementById("input-italiana-cantidad").value = '4';

}






function italianafamiliares() {
document.getElementById("input-italiana-precio").value = '$10.990';
document.getElementById("input-italiana-cantidad").value = '1';
document.getElementById("input-italiana-tamaño").value = 'FAMILIAR';
document.getElementById("input-italiana-pizza").value = 'ITALIANA';
}

function italianafamiliaresdos() {
document.getElementById("input-italiana-precio").value = '$17.990';
document.getElementById("input-italiana-cantidad").value = '2';
}

function italianafamiliarestres() {
document.getElementById("input-italiana-precio").value = '$28.990';
document.getElementById("input-italiana-cantidad").value = '3';
}

function italianafamiliarescuatro() {
document.getElementById("input-italiana-precio").value = '$35.980';
document.getElementById("input-italiana-cantidad").value = '4';
}



function italianapizza() {
  document.getElementById("input-italiana-pizza").value = 'ITALIANAS';
  document.getElementById("volver-italiana-html").hidden = true; 
  }



  function borrarpedidoitaliana() {
    document.getElementById("input-italiana-pizza").value = '';
    document.getElementById("input-italiana-tamaño").value = '';
    document.getElementById("input-italiana-cantidad").value = '';
    document.getElementById("input-italiana-precio").value = '';
    document.getElementById("input-italiana-masa").value = '';
    document.getElementById("inputs-italiana").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-italiana").hidden = true; 
    }




    function agregaralpedidoitaliana() {
      document.getElementById("inputs-italiana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-italiana").value;
      document.getElementById("input-italiana-instrucciones").value=nota;
      document.getElementById("volver-italiana-html").hidden = true; 
      }


      

    function volveritaliana() {
      document.getElementById("volver-italiana-html").hidden = false; 
    }
