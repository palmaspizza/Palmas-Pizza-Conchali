
<form action="" class="formulario" style="width: 100% !important; height: 100% !important; margin: 0; margin-top: 0px !important; padding: 0; max-width: 100%; max-height: 100%; background-color: #fff !important" >









    <div id="pizzasform" >
      
    
    
    <!-- ITALIANA -->
    
    
    <a data-open="ventana-italiana" href="#anchor-pedir-italiana">
      <div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 95%; margin: auto; height: 130px; margin-top: 20px;">
          <img style="border-right: 2px solid rgb(255, 136, 0); height: 120px; width: 120px;" class="img-pizza" src="/Pizzas/italiana.png" alt="">
      
          
          <p class="nombre-pizza">ITALIANA</p>
          <p class="ing-pizza">Salsa, Queso:
            <br> Champiñón, Aceituna, Pepperoni, Salchicha</p>
    
            
    
               </div>
               
    </a>
    
    
    
    
    
    <div class="btn-group">
      <div class="modal cantidad-button" id="ventana-italiana" data-animation="slideInOutLeft" >
        <div style="height: 90%;" class="modal-dialog" >
          <head>
              <h1 class="formulario__titulo" style="font-size: 250%;">Italiana</h1>
    
              
          </head>
    
    
    
            <img class="pizza-imagen" src="/Pizzas/italiana.png" alt="">
            
            <h2 style="margin-left: 4%; font-size: 220%; ">Ingredientes:</h2>
            
            <p style="margin-left: 4%; font-size: 200%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: #ff5500; ">Queso, Champiñón, Aceituna, Pepperoni, Salchicha </p>
            
            
            <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
          />
            
          <a id="anchor-pedir-italiana"></a>
           
            <footer><button type="button" class="buttons" style="width: 95%; height: 70px !important;" data-close="" data-open="italiana-html" onclick="italianapizza();">Pedir</button>
             <br><br>
              <button type="button" class="button-select" style="width: auto; height: 70px !important;" data-close="">CERRAR</button>
    
          </footer>
            
        </div>
      </div>
      </div>
    
    
    
    
    
    <!-- VENTANA DE PAGINA COMPLETA ITALIANA -->
    
    
    <div class="btn-group">
      <div class="modal cantidad-button" style="text-align: left;" id="italiana-html" data-animation="slideInOutLeft" >
        <div style="height: 90%;" class="modal-dialog" >
          <head style="background: black !important;" >
            </head>
           
            <form action="" class="formulario" style="width: 100% !important; height: 100% !important; margin: 0; margin-top: px !important; padding: 0; max-width: 100%; max-height: 10%; position: static;">
    
    <input readonly
              class="formulario__input"
       style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
            />
            
              <center>
                <button type="button" id="volver-italiana-html" class="button-select" style="margin: auto; width: auto; height: auto !important; position: relative; float: left; margin-top: 23px; margin-left: 15%;" data-close="" hidden>Volver</button>
                <br><br><br>
                  <button type="button" class="button-select" style="margin: auto; width: auto; height: auto !important; position: relative;  margin: auto; margin-top: -40px;" data-close="" onclick="borrarpedidoitaliana();" >Borrar y Volver</button>
            
              </center>
              
              <h2 style="margin-left: 4%; font-size: 200%; ">Tamaño:</h2>
              <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona el <span style="color: #ff5500;">Tamaño</span> de tu Pizza</p>
              <button type="button" class="tamaño button-select" id="familiaritaliana" onclick="cambiarcolorfamiliaritaliana();" data-open="cantidad-italiana-familiar-button" ondblclick="italianatamañofamiliar();" >Familiar</button>
      
              
      
              
              <button type="button" class="tamaño button-select" id="medianaitaliana" onclick="cambiarcolormedianaitaliana();" data-open="cantidad-italiana-mediana-button" ondblclick="italianatamañomediana();" >Mediana</button>
              
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
           <!-- VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
      
              <div class="btn-group"  >
                  <div class="modal cantidad-button" id="cantidad-italiana-familiar-button" data-animation="slideInOutLeft" >
                    <div style="height: auto;" class="modal-dialog" >
                      <head style="background: black !important;" >
                          <h1 class="formulario__titulo">Familiares</h1>
                          <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                    
                        </head>
                       
              
                      <section class="modal-content" >
                         
                          
                         <button type="button" class="button-select" style="width: 90%;" value="7000" id="1italianafamiliares"data-close="" onclick="italianafamiliares();">1</button>
                   <br>
                   <br>
                         <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2italianafamiliares"data-close="" onclick="italianafamiliaresdos();" data-open="agregarbebidapromo">2</button>
                         <br>
                         <br>
                         <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3italianafamiliares"data-close="" onclick="italianafamiliarestres();">3</button>
                         <br>
                         <br>
                         <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4italianafamiliares"data-close="" onclick="italianafamiliarescuatro();">4</button>
           <br><br>
           <button type="button" class="button-select" style="width: 90%; font-size: 250%; padding: 2px;">+</button>
           
                          <br><br>
                          
           
                    </div>
                  </div>
                  </div>
       <!-- FIN DE VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
      
      
              
       
    
        <!-- VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
              <div class="btn-group"  >
                  <div class="modal cantidad-button" id="cantidad-italiana-mediana-button" data-animation="slideInOutLeft" >
                    <div style="height: auto;" class="modal-dialog" >
                      <head style="background: black !important;" >
              <h1 class="formulario__titulo">Medianas</h1>
                          <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                    
                        </head>
                       
              
                      <section class="modal-content" >
                         
                          
                         <button type="button" class="button-select" style="width: 90%;" value="7000" id="1italianamedianas" data-close="" onclick="italianamedianas();">1</button>
                   <br>
                   <br>
                         <button type="button" class="button-select" style="width: 90%;" value="14990" id="2italiananamedianas"data-close="" onclick="italianamedianasdos();">2</button>
                         <br>
                         <br>
                         <button type="button" class="button-select" style="width: 90%;" value="23980" id="3italiananamedianas"data-close="" onclick="italianamedianastres();">3</button>
                         <br>
                         <br>
                         <button type="button" class="button-select" style="width: 90%;" value="29480" id="4italiananamedianas"data-close="" onclick="italianamedianascuatro();">4</button>
           <br><br>
           <button href="whatsapp.com" type="button" class="button-select" style="width: 90%; font-size: 230% !important; padding: 3px  !important;" value="+" data-close="" data-open="pedidoconanticipacion">+</button>
           
                          <br><br>
                          <br><br>
                    </div>
                  </div>
                  </div>
      
      
       <!-- FIN DE VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
      
      
      
      
      
      
      
       
      
      
      
      
      
      
      
              
              <input readonly
              class="formulario__input"
       style="border-color: rgb(94, 94, 94) !important;"
            />
      
      
            <h2 style="margin-left: 4%; font-size: 200%; ">Masa:</h2>
            <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona la <span style="color: #ff5500;">Masa</span> de tu Pizza</p>
            <button type="button" class="tamaño button-select" id="masatradicionalitaliana" onclick="cambiarcolormasatradicionalitaliana();">Tradicional</button>
            <button type="button" class="tamaño button-select" id="masadelgadaitaliana" onclick="cambiarcolormasadelgadaitaliana();">Delgada</button>
            
      
            
            <input readonly
            class="formulario__input"
      style="border-color: rgb(94, 94, 94) !important;"
          />
              
    
              <label class="formulario__label" for="instrucciones" style="margin-left: 2%;">Instrucciones Especiales  <span style="color: rgb(88, 88, 88);">(Opcional) </span>:</label>
              <input
              id="instrucciones-italiana" 
              class="instrucciones__input" 
              type="text" 
              placeholder="Añade una Nota para el chef o repartidor">
              
              
      
              
              <br><br>
              <footer>
                  <button type="button" class="buttons" style="width: 100%; height: 70px !important;" id="finalizarpedido-italiana" data-close="" data-open="darkground" onclick="agregaralpedidoitaliana();" onchange="sumar();" hidden>Agregar al Pedido <img src="/PalmasPizzaIMG/carrito-img-white.png" alt="" style="width: 50px; position: absolute; margin-top: -15px;"></button>
              </footer>
             
    
                  </form>
                 
        </div>
      </div>
      </div>
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <!-- HAWAIANA -->
    
    
    <a data-open="ventana-hawaiana" href="#anchor-pedir-hawaiana">
    <div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 95%; margin: auto; height: 120px; margin-top: 20px;">
        <img style="border: 2px solid rgb(255, 136, 0); height: 115px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/hawaiana.png" alt="">
    
        
        <p class="nombre-pizza">HAWAIANA</p>
        <p class="ing-pizza">Salsa, Queso: <br>
    Piña, Jamón</p>
    
          
    
             </div>
             
    </a>
    
    
    
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" id="ventana-hawaiana" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head>
            <h1 class="formulario__titulo" style="font-size: 250%;">Hawaiana</h1>
    
            
        </head>
    
    
    
          <img class="pizza-imagen" src="/Pizzas/hawaiana.png" alt="">
          
          <h2 style="margin-left: 4%; font-size: 220%; ">Ingredientes:</h2>
          
          <p style="margin-left: 4%; font-size: 200%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: #ff5500; ">Queso, Champiñón, Aceituna, Pepperoni, Salchicha </p>
          
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
        />
          
        <a id="anchor-pedir-hawaiana"></a>
         
          <footer><button type="button" class="buttons" style="width: 95%; height: 70px !important;" data-close="" data-open="hawaiana-html" onclick="hawaianapizza();">Pedir</button>
           <br><br>
            <button type="button" class="button-select" style="width: auto; height: 70px !important;" data-close="">CERRAR</button>
    
        </footer>
          
      </div>
    </div>
    </div>
    
    
    
    
    
    <!-- VENTANA DE PAGINA COMPLETA ITALIANA -->
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" style="text-align: left;" id="hawaiana-html" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head style="background: black !important;" >
          </head>
         
          <form action="" class="formulario" style="width: 100% !important; height: 100% !important; margin: 0; margin-top: px !important; padding: 0; max-width: 100%; max-height: 10%; position: static;">
    
    <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
          />
          
            
              <button type="button" id="volver-hawaiana-html" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative; float: left; margin-top: 23px; margin-left: 15%;" data-close="" hidden>Volver</button>
              <br><br><br>
                <button type="button" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative;  margin: auto; margin-top: -40px;" data-close="" onclick="borrarpedidohawaiana();">Borrar y Volver</button>
          
            
            
            <h2 style="margin-left: 4%; font-size: 200%; ">Tamaño:</h2>
            <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona el <span style="color: #ff5500;">Tamaño</span> de tu Pizza</p>
            <button type="button" class="tamaño button-select" id="familiarhawaiana" onclick="cambiarcolorfamiliarhawaiana();" data-open="cantidad-hawaiana-familiar-button" ondblclick="hawaianatamañofamiliar();" >Familiar</button>
    
            
    
            
            <button type="button" class="tamaño button-select" id="medianahawaiana" onclick="cambiarcolormedianahawaiana();" data-open="cantidad-hawaiana-mediana-button" ondblclick="hawaianatamañomediana();" >Mediana</button>
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         <!-- VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-hawaiana-familiar-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
                        <h1 class="formulario__titulo">Familiares</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1hawaianafamiliares"data-close="" onclick="hawaianafamiliares();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2hawaianafamiliares"data-close="" onclick="hawaianafamiliaresdos();" data-open="agregarbebidapromo">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3hawaianafamiliares"data-close="" onclick="hawaianafamiliarestres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4hawaianafamiliares"data-close="" onclick="hawaianafamiliarescuatro();">4</button>
         <br><br>
         <button type="button" class="button-select" style="width: 90%; font-size: 250%; padding: 2px;">+</button>
         
                        <br><br>
                        
         
                  </div>
                </div>
                </div>
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
    
            
     
    
      <!-- VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-hawaiana-mediana-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
            <h1 class="formulario__titulo">Medianas</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1hawaianamedianas" data-close="" onclick="hawaianamedianas();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17990" id="2hawaiananamedianas"data-close="" onclick="hawaianamedianasdos();">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3hawaiananamedianas"data-close="" onclick="hawaianamedianastres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4hawaiananamedianas"data-close="" onclick="hawaianamedianascuatro();">4</button>
         <br><br>
         <button href="whatsapp.com" type="button" class="button-select" style="width: 90%; font-size: 230% !important; padding: 3px  !important;" value="+" data-close="" data-open="pedidoconanticipacion">+</button>
         
                        <br><br>
                        <br><br>
                  </div>
                </div>
                </div>
    
    
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    
            
            <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important;"
          />
    
    
          <h2 style="margin-left: 4%; font-size: 200%; ">Masa:</h2>
          <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona la <span style="color: #ff5500;">Masa</span> de tu Pizza</p>
          <button type="button" class="tamaño button-select" id="masatradicionalhawaiana" onclick="cambiarcolormasatradicionalhawaiana();">Tradicional</button>
          <button type="button" class="tamaño button-select" id="masadelgadahawaiana" onclick="cambiarcolormasadelgadahawaiana();">Delgada</button>
          
    
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important;"
        />
            
    
            <label class="formulario__label" for="instrucciones" style="margin-left: 2%;">Instrucciones Especiales  <span style="color: rgb(88, 88, 88);">(Opcional) </span>:</label>
            <input
            id="instrucciones-hawaiana" 
            class="instrucciones__input" 
            type="text" 
            placeholder="Añade una Nota para el chef o repartidor">
            
            
    
            
            <br><br>
            <button type="button" class="buttons" style="width: 100%; height: 70px !important;" id="finalizarpedido-hawaiana" data-close="" onclick="agregaralpedidohawaiana();" hidden>Agregar al Pedido<img src="/PalmasPizzaIMG/carrito-img-white.png" alt="" style="width: 50px; position: absolute; margin-top: -15px;"></button>
    
           
    
                </form>
               <script src="/Index/hawaiana.js"></script>
      </div>
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <!-- NAPOLITANA -->
    
    
    <a data-open="ventana-napolitana" href="#anchor-pedir-napolitana">
    <div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 95%; margin: auto; height: 120px; margin-top: 20px;">
        <img style="border: 2px solid rgb(255, 136, 0); height: 115px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/napolitana.png" alt="">
    
        
        <p class="nombre-pizza">NAPOLITANA</p>
        <p class="ing-pizza">Salsa, Queso: <br>
    Tomate </p>
    
          
    
             </div>
             
    </a>
    
    
    
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" id="ventana-napolitana" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head>
            <h1 class="formulario__titulo" style="font-size: 250%;">Napolitana</h1>
    
            
        </head>
    
    
    
          <img class="pizza-imagen" src="/Pizzas/napolitana.png" alt="">
          
          <h2 style="margin-left: 4%; font-size: 220%; ">Ingredientes:</h2>
          
          <p style="margin-left: 4%; font-size: 200%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: #ff5500; ">Queso, Champiñón, Aceituna, Pepperoni, Salchicha </p>
          
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
        />
          
        <a id="anchor-pedir-napolitana"></a>
         
          <footer><button type="button" class="buttons" style="width: 95%; height: 70px !important;" data-close="" data-open="napolitana-html" onclick="napolitanapizza();">Pedir</button>
           <br><br>
            <button type="button" class="button-select" style="width: auto; height: 70px !important;" data-close="">CERRAR</button>
    
        </footer>
          
      </div>
    </div>
    </div>
    
    
    
    
    
    <!-- VENTANA DE PAGINA COMPLETA ITALIANA -->
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" style="text-align: left;" id="napolitana-html" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head style="background: black !important;" >
          </head>
         
          <form action="" class="formulario" style="width: 100% !important; height: 100% !important; margin: 0; margin-top: px !important; padding: 0; max-width: 100%; max-height: 10%; position: static;">
    
    <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
          />
          
            
              <button type="button" id="volver-napolitana-html" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative; float: left; margin-top: 23px; margin-left: 15%;" data-close="" hidden>Volver</button>
              <br><br><br>
                <button type="button" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative;  margin: auto; margin-top: -40px;" data-close="" onclick="borrarpedidonapolitana();">Borrar y Volver</button>
          
            
            
            <h2 style="margin-left: 4%; font-size: 200%; ">Tamaño:</h2>
            <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona el <span style="color: #ff5500;">Tamaño</span> de tu Pizza</p>
            <button type="button" class="tamaño button-select" id="familiarnapolitana" onclick="cambiarcolorfamiliarnapolitana();" data-open="cantidad-napolitana-familiar-button" ondblclick="napolitanatamañofamiliar();" >Familiar</button>
    
            
    
            
            <button type="button" class="tamaño button-select" id="mediananapolitana" onclick="cambiarcolormediananapolitana();" data-open="cantidad-napolitana-mediana-button" ondblclick="napolitanatamañomediana();" >Mediana</button>
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         <!-- VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-napolitana-familiar-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
                        <h1 class="formulario__titulo">Familiares</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1napolitanafamiliares"data-close="" onclick="napolitanafamiliares();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2napolitanafamiliares"data-close="" onclick="napolitanafamiliaresdos();" data-open="agregarbebidapromo">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3napolitanafamiliares"data-close="" onclick="napolitanafamiliarestres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4napolitanafamiliares"data-close="" onclick="napolitanafamiliarescuatro();">4</button>
         <br><br>
         <button type="button" class="button-select" style="width: 90%; font-size: 250%; padding: 2px;">+</button>
         
                        <br><br>
                        
         
                  </div>
                </div>
                </div>
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
    
            
     
    
      <!-- VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-napolitana-mediana-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
            <h1 class="formulario__titulo">Medianas</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1napolitanamedianas" data-close="" onclick="napolitanamedianas();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2napolitananamedianas"data-close="" onclick="napolitanamedianasdos();">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3napolitananamedianas"data-close="" onclick="napolitanamedianastres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4napolitananamedianas"data-close="" onclick="napolitanamedianascuatro();">4</button>
         <br><br>
         <button href="whatsapp.com" type="button" class="button-select" style="width: 90%; font-size: 230% !important; padding: 3px  !important;" value="+" data-close="" data-open="pedidoconanticipacion">+</button>
         
                        <br><br>
                        <br><br>
                  </div>
                </div>
                </div>
    
    
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    
            
            <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important;"
          />
    
    
          <h2 style="margin-left: 4%; font-size: 200%; ">Masa:</h2>
          <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona la <span style="color: #ff5500;">Masa</span> de tu Pizza</p>
          <button type="button" class="tamaño button-select" id="masatradicionalnapolitana" onclick="cambiarcolormasatradicionalnapolitana();">Tradicional</button>
          <button type="button" class="tamaño button-select" id="masadelgadanapolitana" onclick="cambiarcolormasadelgadanapolitana();">Delgada</button>
          
    
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important;"
        />
            
    
            <label class="formulario__label" for="instrucciones" style="margin-left: 2%;">Instrucciones Especiales  <span style="color: rgb(88, 88, 88);">(Opcional) </span>:</label>
            <input
            id="instrucciones-napolitana" 
            class="instrucciones__input" 
            type="text" 
            placeholder="Añade una Nota para el chef o repartidor">
            
            
    
            
            <br><br>
            <button type="button" class="buttons" style="width: 100%; height: 70px !important;" id="finalizarpedido-napolitana" data-close="" onclick="agregaralpedidonapolitana();" hidden>Agregar al Pedido<img src="/PalmasPizzaIMG/carrito-img-white.png" alt="" style="width: 50px; position: absolute; margin-top: -15px;"></button>
    
           
    
                </form>
               <script src="/Index/napolitana.js"></script>
      </div>
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <!-- SUPER PEPPERONI -->
    
    
    <a data-open="ventana-superpepperoni" href="#anchor-pedir-superpepperoni">
    <div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 95%; margin: auto; height: 120px; margin-top: 20px;">
        <img style="border: 2px solid rgb(255, 136, 0); height: 115px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/superpepperoni.png" alt="">
    
        
        <p class="nombre-pizza">SUPER PEPPERONI</p>
        <p class="ing-pizza">Salsa, Queso: <br>
    Tomate </p>
    
          
    
             </div>
             
    </a>
    
    
    
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" id="ventana-superpepperoni" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head>
            <h1 class="formulario__titulo" style="font-size: 250%;">Super Pepperoni</h1>
    
            
        </head>
    
    
    
          <img class="pizza-imagen" src="/Pizzas/superpepperoni.png" alt="">
          
          <h2 style="margin-left: 4%; font-size: 220%; ">Ingredientes:</h2>
          
          <p style="margin-left: 4%; font-size: 200%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: #ff5500; ">Queso, Champiñón, Aceituna, Pepperoni, Salchicha </p>
          
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
        />
          
        <a id="anchor-pedir-superpepperoni"></a>
         
          <footer><button type="button" class="buttons" style="width: 95%; height: 70px !important;" data-close="" data-open="superpepperoni-html" onclick="superpepperonipizza();">Pedir</button>
           <br><br>
            <button type="button" class="button-select" style="width: auto; height: 70px !important;" data-close="">CERRAR</button>
    
        </footer>
          
      </div>
    </div>
    </div>
    
    
    
    
    
    <!-- VENTANA DE PAGINA COMPLETA ITALIANA -->
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" style="text-align: left;" id="superpepperoni-html" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head style="background: black !important;" >
          </head>
         
          <form action="" class="formulario" style="width: 100% !important; height: 100% !important; margin: 0; margin-top: px !important; padding: 0; max-width: 100%; max-height: 10%; position: static;">
    
    <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
          />
          
            
              <button type="button" id="volver-superpepperoni-html" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative; float: left; margin-top: 23px; margin-left: 15%;" data-close="" hidden>Volver</button>
              <br><br><br>
                <button type="button" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative;  margin: auto; margin-top: -40px;" data-close="" onclick="borrarpedidosuperpepperoni();">Borrar y Volver</button>
          
            
            
            <h2 style="margin-left: 4%; font-size: 200%; ">Tamaño:</h2>
            <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona el <span style="color: #ff5500;">Tamaño</span> de tu Pizza</p>
            <button type="button" class="tamaño button-select" id="familiarsuperpepperoni" onclick="cambiarcolorfamiliarsuperpepperoni();" data-open="cantidad-superpepperoni-familiar-button" ondblclick="superpepperonitamañofamiliar();" >Familiar</button>
    
            
    
            
            <button type="button" class="tamaño button-select" id="medianasuperpepperoni" onclick="cambiarcolormedianasuperpepperoni();" data-open="cantidad-superpepperoni-mediana-button" ondblclick="superpepperonitamañomediana();" >Mediana</button>
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         <!-- VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-superpepperoni-familiar-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
                        <h1 class="formulario__titulo">Familiares</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1superpepperonifamiliares"data-close="" onclick="superpepperonifamiliares();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2superpepperonifamiliares"data-close="" onclick="superpepperonifamiliaresdos();" data-open="agregarbebidapromo">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3superpepperonifamiliares"data-close="" onclick="superpepperonifamiliarestres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4superpepperonifamiliares"data-close="" onclick="superpepperonifamiliarescuatro();">4</button>
         <br><br>
         <button type="button" class="button-select" style="width: 90%; font-size: 250%; padding: 2px;">+</button>
         
                        <br><br>
                        
         
                  </div>
                </div>
                </div>
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
    
            
     
    
      <!-- VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-superpepperoni-mediana-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
            <h1 class="formulario__titulo">Medianas</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1superpepperonimedianas" data-close="" onclick="superpepperonimedianas();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2superpepperoninamedianas"data-close="" onclick="superpepperonimedianasdos();">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3superpepperoninamedianas"data-close="" onclick="superpepperonimedianastres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4superpepperoninamedianas"data-close="" onclick="superpepperonimedianascuatro();">4</button>
         <br><br>
         <button href="whatsapp.com" type="button" class="button-select" style="width: 90%; font-size: 230% !important; padding: 3px  !important;" value="+" data-close="" data-open="pedidoconanticipacion">+</button>
         
                        <br><br>
                        <br><br>
                  </div>
                </div>
                </div>
    
    
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    
            
            <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important;"
          />
    
    
          <h2 style="margin-left: 4%; font-size: 200%; ">Masa:</h2>
          <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona la <span style="color: #ff5500;">Masa</span> de tu Pizza</p>
          <button type="button" class="tamaño button-select" id="masatradicionalsuperpepperoni" onclick="cambiarcolormasatradicionalsuperpepperoni();">Tradicional</button>
          <button type="button" class="tamaño button-select" id="masadelgadasuperpepperoni" onclick="cambiarcolormasadelgadasuperpepperoni();">Delgada</button>
          
    
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important;"
        />
            
    
            <label class="formulario__label" for="instrucciones" style="margin-left: 2%;">Instrucciones Especiales  <span style="color: rgb(88, 88, 88);">(Opcional) </span>:</label>
            <input
            id="instrucciones-superpepperoni" 
            class="instrucciones__input" 
            type="text" 
            placeholder="Añade una Nota para el chef o repartidor">
            
            
    
            
            <br><br>
            <button type="button" class="buttons" style="width: 100%; height: 70px !important;" id="finalizarpedido-superpepperoni" data-close="" onclick="agregaralpedidosuperpepperoni();" hidden>Agregar al Pedido<img src="/PalmasPizzaIMG/carrito-img-white.png" alt="" style="width: 50px; position: absolute; margin-top: -15px;"></button>
    
           
    
                </form>
               <script src="/Index/superpepperoni.js"></script>
      </div>
    </div>
    </div>
    
    
    <!-- FIN DE SUPER PEPPERONI -->
    
    
    
    
    
    <!-- VEGETARIANA -->
    
    
    <a data-open="ventana-vegetariana" href="#anchor-pedir-vegetariana">
    <div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 95%; margin: auto; height: 120px; margin-top: 20px;">
        <img style="border: 2px solid rgb(255, 136, 0); height: 115px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/vegetariana.png" alt="">
    
        
        <p class="nombre-pizza">VEGETARIANA</p>
        <p class="ing-pizza">Salsa, Queso: <br>
    Tomate </p>
    
          
    
             </div>
             
    </a>
    
    
    
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" id="ventana-vegetariana" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head>
            <h1 class="formulario__titulo" style="font-size: 250%;">Super Pepperoni</h1>
    
            
        </head>
    
    
    
          <img class="pizza-imagen" src="/Pizzas/vegetariana.png" alt="">
          
          <h2 style="margin-left: 4%; font-size: 220%; ">Ingredientes:</h2>
          
          <p style="margin-left: 4%; font-size: 200%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: #ff5500; ">Queso, Champiñón, Aceituna, Pepperoni, Salchicha </p>
          
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
        />
          
        <a id="anchor-pedir-vegetariana"></a>
         
          <footer><button type="button" class="buttons" style="width: 95%; height: 70px !important;" data-close="" data-open="vegetariana-html" onclick="vegetarianapizza();">Pedir</button>
           <br><br>
            <button type="button" class="button-select" style="width: auto; height: 70px !important;" data-close="">CERRAR</button>
    
        </footer>
          
      </div>
    </div>
    </div>
    
    
    
    
    
    <!-- VENTANA DE PAGINA COMPLETA ITALIANA -->
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" style="text-align: left;" id="vegetariana-html" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head style="background: black !important;" >
          </head>
         
          <form action="" class="formulario" style="width: 100% !important; height: 100% !important; margin: 0; margin-top: px !important; padding: 0; max-width: 100%; max-height: 10%; position: static;">
    
    <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
          />
          
            
              <button type="button" id="volver-vegetariana-html" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative; float: left; margin-top: 23px; margin-left: 15%;" data-close="" hidden>Volver</button>
              <br><br><br>
                <button type="button" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative;  margin: auto; margin-top: -40px;" data-close="" onclick="borrarpedidovegetariana();">Borrar y Volver</button>
          
            
            
            <h2 style="margin-left: 4%; font-size: 200%; ">Tamaño:</h2>
            <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona el <span style="color: #ff5500;">Tamaño</span> de tu Pizza</p>
            <button type="button" class="tamaño button-select" id="familiarvegetariana" onclick="cambiarcolorfamiliarvegetariana();" data-open="cantidad-vegetariana-familiar-button" ondblclick="vegetarianatamañofamiliar();" >Familiar</button>
    
            
    
            
            <button type="button" class="tamaño button-select" id="medianavegetariana" onclick="cambiarcolormedianavegetariana();" data-open="cantidadvegetariana-mediana-button" ondblclick="vegetarianatamañomediana();" >Mediana</button>
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         <!-- VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-vegetariana-familiar-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
                        <h1 class="formulario__titulo">Familiares</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1vegetarianafamiliares"data-close="" onclick="vegetarianafamiliares();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2vegetarianafamiliares"data-close="" onclick="vegetarianafamiliaresdos();" data-open="agregarbebidapromo">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3vegetarianafamiliares"data-close="" onclick="vegetarianafamiliarestres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4vegetarianafamiliares"data-close="" onclick="vegetarianafamiliarescuatro();">4</button>
         <br><br>
         <button type="button" class="button-select" style="width: 90%; font-size: 250%; padding: 2px;">+</button>
         
                        <br><br>
                        
         
                  </div>
                </div>
                </div>
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
    
            
     
    
      <!-- VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-vegetariana-mediana-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
            <h1 class="formulario__titulo">Medianas</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1vegetarianamedianas" data-close="" onclick="vegetarianamedianas();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2vegetariananamedianas"data-close="" onclick="vegetarianamedianasdos();">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3vegetariananamedianas"data-close="" onclick="vegetarianamedianastres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4vegetariananamedianas"data-close="" onclick="vegetarianamedianascuatro();">4</button>
         <br><br>
         <button href="whatsapp.com" type="button" class="button-select" style="width: 90%; font-size: 230% !important; padding: 3px  !important;" value="+" data-close="" data-open="pedidoconanticipacion">+</button>
         
                        <br><br>
                        <br><br>
                  </div>
                </div>
                </div>
    
    
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    
            
            <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important;"
          />
    
    
          <h2 style="margin-left: 4%; font-size: 200%; ">Masa:</h2>
          <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona la <span style="color: #ff5500;">Masa</span> de tu Pizza</p>
          <button type="button" class="tamaño button-select" id="masatradicionalvegetariana" onclick="cambiarcolormasatradicionalvegetariana();">Tradicional</button>
          <button type="button" class="tamaño button-select" id="masadelgadavegetariana" onclick="cambiarcolormasadelgadavegetariana();">Delgada</button>
          
    
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important;"
        />
            
    
            <label class="formulario__label" for="instrucciones" style="margin-left: 2%;">Instrucciones Especiales  <span style="color: rgb(88, 88, 88);">(Opcional) </span>:</label>
            <input
            id="instrucciones-vegetariana" 
            class="instrucciones__input" 
            type="text" 
            placeholder="Añade una Nota para el chef o repartidor">
            
            
    
            
            <br><br>
            <button type="button" class="buttons" style="width: 100%; height: 70px !important;" id="finalizarpedido-vegetariana" data-close="" onclick="agregaralpedidovegetariana();" hidden>Agregar al Pedido<img src="/PalmasPizzaIMG/carrito-img-white.png" alt="" style="width: 50px; position: absolute; margin-top: -15px;"></button>
    
           
    
                </form>
               <script src="/Index/vegetariana.js"></script>
      </div>
    </div>
    </div>
    
    
    
    <!-- FIN DE VEGETARIANA -->
    
    
    
    
    <!-- LUCO PIZZA -->
    
    
    <a data-open="ventana-lucopizza" href="#anchor-pedir-lucopizza">
    <div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 95%; margin: auto; height: 120px; margin-top: 20px;">
        <img style="border: 2px solid rgb(255, 136, 0); height: 115px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/lucopizza.png" alt="">
    
        
        <p class="nombre-pizza">LUCO PIZZA</p>
        <p class="ing-pizza">Salsa, Queso: <br>
    Tomate </p>
    
          
    
             </div>
             
    </a>
    
    
    
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" id="ventana-lucopizza" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head>
            <h1 class="formulario__titulo" style="font-size: 250%;">Super Pepperoni</h1>
    
            
        </head>
    
    
    
          <img class="pizza-imagen" src="/Pizzas/lucopizza.png" alt="">
          
          <h2 style="margin-left: 4%; font-size: 220%; ">Ingredientes:</h2>
          
          <p style="margin-left: 4%; font-size: 200%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: #ff5500; ">Queso, Champiñón, Aceituna, Pepperoni, Salchicha </p>
          
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
        />
          
        <a id="anchor-pedir-lucopizza"></a>
         
          <footer><button type="button" class="buttons" style="width: 95%; height: 70px !important;" data-close="" data-open="lucopizza-html" onclick="lucopizzapizza();">Pedir</button>
           <br><br>
            <button type="button" class="button-select" style="width: auto; height: 70px !important;" data-close="">CERRAR</button>
    
        </footer>
          
      </div>
    </div>
    </div>
    
    
    
    
    
    <!-- VENTANA DE PAGINA COMPLETA ITALIANA -->
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" style="text-align: left;" id="lucopizza-html" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head style="background: black !important;" >
          </head>
         
          <form action="" class="formulario" style="width: 100% !important; height: 100% !important; margin: 0; margin-top: px !important; padding: 0; max-width: 100%; max-height: 10%; position: static;">
    
    <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
          />
          
            
              <button type="button" id="volver-lucopizza-html" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative; float: left; margin-top: 23px; margin-left: 15%;" data-close="" hidden>Volver</button>
              <br><br><br>
                <button type="button" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative;  margin: auto; margin-top: -40px;" data-close="" onclick="borrarpedidolucopizza();">Borrar y Volver</button>
          
            
            
            <h2 style="margin-left: 4%; font-size: 200%; ">Tamaño:</h2>
            <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona el <span style="color: #ff5500;">Tamaño</span> de tu Pizza</p>
            <button type="button" class="tamaño button-select" id="familiarlucopizza" onclick="cambiarcolorfamiliarlucopizza();" data-open="cantidad-lucopizza-familiar-button" ondblclick="lucopizzatamañofamiliar();" >Familiar</button>
    
            
    
            
            <button type="button" class="tamaño button-select" id="medianalucopizza" onclick="cambiarcolormedianalucopizza();" data-open="cantidad-lucopizza-mediana-button" ondblclick="lucopizzatamañomediana();" >Mediana</button>
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         <!-- VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-lucopizza-familiar-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
                        <h1 class="formulario__titulo">Familiares</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1lucopizzafamiliares"data-close="" onclick="lucopizzafamiliares();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2lucopizzafamiliares"data-close="" onclick="lucopizzafamiliaresdos();" data-open="agregarbebidapromo">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3lucopizzafamiliares"data-close="" onclick="lucopizzafamiliarestres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4lucopizzafamiliares"data-close="" onclick="lucopizzafamiliarescuatro();">4</button>
         <br><br>
         <button type="button" class="button-select" style="width: 90%; font-size: 250%; padding: 2px;">+</button>
         
                        <br><br>
                        
         
                  </div>
                </div>
                </div>
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
    
            
     
    
      <!-- VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-lucopizza-mediana-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
            <h1 class="formulario__titulo">Medianas</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1lucopizzamedianas" data-close="" onclick="lucopizzamedianas();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2lucopizzanamedianas"data-close="" onclick="lucopizzamedianasdos();">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3lucopizzanamedianas"data-close="" onclick="lucopizzamedianastres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4lucopizzanamedianas"data-close="" onclick="lucopizzamedianascuatro();">4</button>
         <br><br>
         <button href="whatsapp.com" type="button" class="button-select" style="width: 90%; font-size: 230% !important; padding: 3px  !important;" value="+" data-close="" data-open="pedidoconanticipacion">+</button>
         
                        <br><br>
                        <br><br>
                  </div>
                </div>
                </div>
    
    
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    
            
            <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important;"
          />
    
    
          <h2 style="margin-left: 4%; font-size: 200%; ">Masa:</h2>
          <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona la <span style="color: #ff5500;">Masa</span> de tu Pizza</p>
          <button type="button" class="tamaño button-select" id="masatradicionallucopizza" onclick="cambiarcolormasatradicionallucopizza();">Tradicional</button>
          <button type="button" class="tamaño button-select" id="masadelgadalucopizza" onclick="cambiarcolormasadelgadalucopizza();">Delgada</button>
          
    
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important;"
        />
            
    
            <label class="formulario__label" for="instrucciones" style="margin-left: 2%;">Instrucciones Especiales  <span style="color: rgb(88, 88, 88);">(Opcional) </span>:</label>
            <input
            id="instrucciones-lucopizza" 
            class="instrucciones__input" 
            type="text" 
            placeholder="Añade una Nota para el chef o repartidor">
            
            
    
            
            <br><br>
            <button type="button" class="buttons" style="width: 100%; height: 70px !important;" id="finalizarpedido-lucopizza" data-close="" onclick="agregaralpedidolucopizza();" hidden>Agregar al Pedido<img src="/PalmasPizzaIMG/carrito-img-white.png" alt="" style="width: 50px; position: absolute; margin-top: -15px;"></button>
    
           
    
                </form>
               <script src="/Index/lucopizza.js"></script>
      </div>
    </div>
    </div>
    <!-- FIN DE LUCO PIZZA -->
    
    
    
    
    <!-- POLLO BBQ -->
    
    
    <a data-open="ventana-pollobbq" href="#anchor-pedir-pollobbq">
    <div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 95%; margin: auto; height: 120px; margin-top: 20px;">
        <img style="border: 2px solid rgb(255, 136, 0); height: 115px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/pollobbq.png" alt="">
    
        
        <p class="nombre-pizza">POLLO BBQ</p>
        <p class="ing-pizza">Salsa, Queso: <br>
    Tomate </p>
    
          
    
             </div>
             
    </a>
    
    
    
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" id="ventana-pollobbq" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head>
            <h1 class="formulario__titulo" style="font-size: 250%;">Pollo BBQ</h1>
    
            
        </head>
    
    
    
          <img class="pizza-imagen" src="/Pizzas/pollobbq.png" alt="">
          
          <h2 style="margin-left: 4%; font-size: 220%; ">Ingredientes:</h2>
          
          <p style="margin-left: 4%; font-size: 200%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: #ff5500; ">Queso, Champiñón, Aceituna, Pepperoni, Salchicha </p>
          
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
        />
          
        <a id="anchor-pedir-pollobbq"></a>
         
          <footer><button type="button" class="buttons" style="width: 95%; height: 70px !important;" data-close="" data-open="pollobbq-html" onclick="pollobbqpizza();">Pedir</button>
           <br><br>
            <button type="button" class="button-select" style="width: auto; height: 70px !important;" data-close="">CERRAR</button>
    
        </footer>
          
      </div>
    </div>
    </div>
    
    
    
    
    
    <!-- VENTANA DE PAGINA COMPLETA ITALIANA -->
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" style="text-align: left;" id="pollobbq-html" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head style="background: black !important;" >
          </head>
         
          <form action="" class="formulario" style="width: 100% !important; height: 100% !important; margin: 0; margin-top: px !important; padding: 0; max-width: 100%; max-height: 10%; position: static;">
    
    <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
          />
          
            
              <button type="button" id="volver-pollobbq-html" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative; float: left; margin-top: 23px; margin-left: 15%;" data-close="" hidden>Volver</button>
              <br><br><br>
                <button type="button" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative;  margin: auto; margin-top: -40px;" data-close="" onclick="borrarpedidopollobbq();">Borrar y Volver</button>
          
            
            
            <h2 style="margin-left: 4%; font-size: 200%; ">Tamaño:</h2>
            <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona el <span style="color: #ff5500;">Tamaño</span> de tu Pizza</p>
            <button type="button" class="tamaño button-select" id="familiarpollobbq" onclick="cambiarcolorfamiliarpollobbq();" data-open="cantidad-pollobbq-familiar-button" ondblclick="pollobbqtamañofamiliar();" >Familiar</button>
    
            
    
            
            <button type="button" class="tamaño button-select" id="medianapollobbq" onclick="cambiarcolormedianapollobbq();" data-open="cantidad-pollobbq-mediana-button" ondblclick="pollobbqtamañomediana();" >Mediana</button>
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         <!-- VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-pollobbq-familiar-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
                        <h1 class="formulario__titulo">Familiares</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1pollobbqfamiliares"data-close="" onclick="pollobbqfamiliares();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2pollobbqfamiliares"data-close="" onclick="pollobbqfamiliaresdos();" data-open="agregarbebidapromo">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3pollobbqfamiliares"data-close="" onclick="pollobbqfamiliarestres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4pollobbqfamiliares"data-close="" onclick="pollobbqfamiliarescuatro();">4</button>
         <br><br>
         <button type="button" class="button-select" style="width: 90%; font-size: 250%; padding: 2px;">+</button>
         
                        <br><br>
                        
         
                  </div>
                </div>
                </div>
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
    
            
     
    
      <!-- VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-pollobbq-mediana-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
            <h1 class="formulario__titulo">Medianas</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1pollobbqmedianas" data-close="" onclick="pollobbqmedianas();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2pollobbqnamedianas"data-close="" onclick="pollobbqmedianasdos();">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3pollobbqnamedianas"data-close="" onclick="pollobbqmedianastres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4pollobbqnamedianas"data-close="" onclick="pollobbqmedianascuatro();">4</button>
         <br><br>
         <button href="whatsapp.com" type="button" class="button-select" style="width: 90%; font-size: 230% !important; padding: 3px  !important;" value="+" data-close="" data-open="pedidoconanticipacion">+</button>
         
                        <br><br>
                        <br><br>
                  </div>
                </div>
                </div>
    
    
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    
            
            <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important;"
          />
    
    
          <h2 style="margin-left: 4%; font-size: 200%; ">Masa:</h2>
          <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona la <span style="color: #ff5500;">Masa</span> de tu Pizza</p>
          <button type="button" class="tamaño button-select" id="masatradicionalpollobbq" onclick="cambiarcolormasatradicionalpollobbq();">Tradicional</button>
          <button type="button" class="tamaño button-select" id="masadelgadapollobbq" onclick="cambiarcolormasadelgadapollobbq();">Delgada</button>
          
    
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important;"
        />
            
    
            <label class="formulario__label" for="instrucciones" style="margin-left: 2%;">Instrucciones Especiales  <span style="color: rgb(88, 88, 88);">(Opcional) </span>:</label>
            <input
            id="instrucciones-pollobbq" 
            class="instrucciones__input" 
            type="text" 
            placeholder="Añade una Nota para el chef o repartidor">
            
            
    
            
            <br><br>
            <button type="button" class="buttons" style="width: 100%; height: 70px !important;" id="finalizarpedido-pollobbq" data-close="" onclick="agregaralpedidopollobbq();" hidden>Agregar al Pedido<img src="/PalmasPizzaIMG/carrito-img-white.png" alt="" style="width: 50px; position: absolute; margin-top: -15px;"></button>
    
           
    
                </form>
               <script src="/Index/pollobbq.js"></script>
      </div>
    </div>
    </div>
    
    
    
    
    
    <!-- CHILLIAN -->
    
    
    <a data-open="ventana-chillian" href="#anchor-pedir-chillian">
    <div style="border: #ff8900 solid; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3); width: 95%; margin: auto; height: 120px; margin-top: 20px;">
        <img style="border: 2px solid rgb(255, 136, 0); height: 115px; width: 120px; border-bottom: 0px;" class="img-pizza" src="/Pizzas/chillian.png" alt="">
    
        
        <p class="nombre-pizza">CHILLIAN</p>
        <p class="ing-pizza">Salsa, Queso: <br>
    Tomate </p>
    
          
    
             </div>
             
    </a>
    
    
    
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" id="ventana-chillian" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head>
            <h1 class="formulario__titulo" style="font-size: 250%;">Super Pepperoni</h1>
    
            
        </head>
    
    
    
          <img class="pizza-imagen" src="/Pizzas/chillian.png" alt="">
          
          <h2 style="margin-left: 4%; font-size: 220%; ">Ingredientes:</h2>
          
          <p style="margin-left: 4%; font-size: 200%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: #ff5500; ">Queso, Champiñón, Aceituna, Pepperoni, Salchicha </p>
          
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
        />
          
        <a id="anchor-pedir-chillian"></a>
         
          <footer><button type="button" class="buttons" style="width: 95%; height: 70px !important;" data-close="" data-open="chillian-html" onclick="chillianpizza();">Pedir</button>
           <br><br>
            <button type="button" class="button-select" style="width: auto; height: 70px !important;" data-close="">CERRAR</button>
    
        </footer>
          
      </div>
    </div>
    </div>
    
    
    
    
    
    <!-- VENTANA DE PAGINA COMPLETA ITALIANA -->
    
    
    <div class="btn-group">
    <div class="modal cantidad-button" style="text-align: left;" id="chillian-html" data-animation="slideInOutLeft" >
      <div style="height: 90%;" class="modal-dialog" >
        <head style="background: black !important;" >
          </head>
         
          <form action="" class="formulario" style="width: 100% !important; height: 100% !important; margin: 0; margin-top: px !important; padding: 0; max-width: 100%; max-height: 10%; position: static;">
    
    <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important; padding-top: 0px; margin-top: -50px;"
          />
          
            
              <button type="button" id="volver-chillian-html" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative; float: left; margin-top: 23px; margin-left: 15%;" data-close="" hidden>Volver</button>
              <br><br><br>
                <button type="button" class="button-select" style="margin: auto; margin-left: 10px; margin-right: 10px; width: auto; height: auto !important; position: relative;  margin: auto; margin-top: -40px;" data-close="" onclick="borrarpedidochillian();">Borrar y Volver</button>
          
            
            
            <h2 style="margin-left: 4%; font-size: 200%; ">Tamaño:</h2>
            <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona el <span style="color: #ff5500;">Tamaño</span> de tu Pizza</p>
            <button type="button" class="tamaño button-select" id="familiarchillian" onclick="cambiarcolorfamiliarchillian();" data-open="cantidad-chillian-familiar-button" ondblclick="chilliantamañofamiliar();" >Familiar</button>
    
            
    
            
            <button type="button" class="tamaño button-select" id="medianachillian" onclick="cambiarcolormedianachillian();" data-open="cantidad-chillian-mediana-button" ondblclick="chilliantamañomediana();" >Mediana</button>
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         <!-- VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-chillian-familiar-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
                        <h1 class="formulario__titulo">Familiares</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1chillianfamiliares"data-close="" onclick="chillianfamiliares();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$17.990" id="2chillianfamiliares"data-close="" onclick="chillianfamiliaresdos();" data-open="agregarbebidapromo">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$28.980" id="3chillianfamiliares"data-close="" onclick="chillianfamiliarestres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$35.980" id="4chillianfamiliares"data-close="" onclick="chillianfamiliarescuatro();">4</button>
         <br><br>
         <button type="button" class="button-select" style="width: 90%; font-size: 250%; padding: 2px;">+</button>
         
                        <br><br>
                        
         
                  </div>
                </div>
                </div>
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS FAMILIARES -->
    
    
            
     
    
      <!-- VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
            <div class="btn-group"  >
                <div class="modal cantidad-button" id="cantidad-chillian-mediana-button" data-animation="slideInOutLeft" >
                  <div style="height: auto;" class="modal-dialog" >
                    <head style="background: black !important;" >
            <h1 class="formulario__titulo">Medianas</h1>
                        <h2 class="" style="font-size: 180% !important;">Número De Pizzas</h2>
                  
                      </head>
                     
            
                    <section class="modal-content" >
                       
                        
                       <button type="button" class="button-select" style="width: 90%;" value="7000" id="1chillianmedianas" data-close="" onclick="chillianmedianas();">1</button>
                 <br>
                 <br>
                       <button type="button" class="button-select" style="width: 90%;" value="$14990" id="2chilliannamedianas"data-close="" onclick="chillianmedianasdos();">2</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="23980" id="3chilliannamedianas"data-close="" onclick="chillianmedianastres();">3</button>
                       <br>
                       <br>
                       <button type="button" class="button-select" style="width: 90%;" value="29480" id="4chilliannamedianas"data-close="" onclick="chillianmedianascuatro();">4</button>
         <br><br>
         <button href="whatsapp.com" type="button" class="button-select" style="width: 90%; font-size: 230% !important; padding: 3px  !important;" value="+" data-close="" data-open="pedidoconanticipacion">+</button>
         
                        <br><br>
                        <br><br>
                  </div>
                </div>
                </div>
    
    
     <!-- FIN DE VENTANA DE NUMERO DE PIZZAS MEDIANAS -->
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    
            
            <input readonly
            class="formulario__input"
     style="border-color: rgb(94, 94, 94) !important;"
          />
    
    
          <h2 style="margin-left: 4%; font-size: 200%; ">Masa:</h2>
          <p style="margin-left: 4%; font-size: 140%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: rgb(93, 93, 93);">Selecciona la <span style="color: #ff5500;">Masa</span> de tu Pizza</p>
          <button type="button" class="tamaño button-select" id="masatradicionalchillian" onclick="cambiarcolormasatradicionalchillian();">Tradicional</button>
          <button type="button" class="tamaño button-select" id="masadelgadachillian" onclick="cambiarcolormasadelgadachillian();">Delgada</button>
          
    
          
          <input readonly
          class="formulario__input"
    style="border-color: rgb(94, 94, 94) !important;"
        />
            
    
            <label class="formulario__label" for="instrucciones" style="margin-left: 2%;">Instrucciones Especiales  <span style="color: rgb(88, 88, 88);">(Opcional) </span>:</label>
            <input
            id="instrucciones-chillian" 
            class="instrucciones__input" 
            type="text" 
            placeholder="Añade una Nota para el chef o repartidor">
            
            
    
            
            <br><br>
            <button type="button" class="buttons" style="width: 100%; height: 70px !important;" id="finalizarpedido-chillian" data-close="" onclick="agregaralpedidochillian();" hidden>Agregar al Pedido<img src="/PalmasPizzaIMG/carrito-img-white.png" alt="" style="width: 50px; position: absolute; margin-top: -15px;"></button>
    
           
    
                </form>
               <script src="/Index/chillian.js"></script>
      </div>
    </div>
    </div>
    
    
    
    
    
    </div>
    
    
    
    
    
    
    
    
        </form>
    