document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //TELEFONO:
    const telefono = document.querySelector("#telefono").value;

    const pagacon = document.querySelector("#pagacon").value;
    const nombre = document.querySelector("#nombre").value;
    const codigodepais = document.querySelector("#codigodepais").value;
    const formadepago = document.querySelector("#formadepago").value;
    const direccion = document.querySelector("#direccion").value;
    const instruccionesitaliana = document.querySelector("#instrucciones-italiana").value;

    const resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_MI NEGOCIO_*%0A
          *Reservas*%0A%0A
          ${direccion}
          ${pagacon}
          ${formadepago}
          ${instruccionesitaliana}
          *¿Cuál es tu nombre?*%0A
          ${nombre}%0A
          *Indica la fecha de tu reserva*%0A%0A
          *Empleado de preferencia*%0A
          ${codigodepais}%0A
          *¿Cuál es el servicio que se desea realizar?*%0A}`

    if (nombre === "" || telefono === "") {
      resp.classList.add("fail");
      resp.innerHTML = `¡Parece que faltan algunos Datos!, ${nombre}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `${nombre} PEDIDO ENVIADO`;
  
    window.open(url);
  });









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





