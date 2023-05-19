//function captura () {
  //      var nomcompleto=document.getElementById("nombrecompleto").value;
    //    var direcciondecorreo=document.getElementById("direcciondecorreo").value;
      //  console.log(nombrecompleto + " " direcciondecorreo);}
/*
document.getElementById('formularioReservas').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario
      
      var nombre = document.getElementById('nombreCompleto').value;
      var correo = document.getElementById('direccionDeCorreo').value;
      
      // Realiza las validaciones necesarias
      if (nombre === '') {
            alert('Por favor, ingrese su nombre completo!');
            return false;
      }
      
      if (correo === '') {
            alert('Por favor, ingrese su correo electrónico!');
            return false;
      }
      
      // Envía el formulario por correo electrónico
      enviarCorreo(nombre, correo);
      });
      
      function enviarCorreo(nombre, correo) {
      //redireccionamos a una nueva página con los datos del formulario
      
      // Crea URL de correo electrónico con los parámetros
      var url = 'mailto:holarociodisenia@gmail.com'
            + '?subject=Reserva en el Café'
            + '&body=Nombre completo: ' + encodeURIComponent(nombre) + '%0D%0A'
            + 'Correo electrónico: ' + encodeURIComponent(correo);
      
      // Abre la URL en una nueva ventana o pestaña
      window.open(url, '_blank');
      return false;
      }
          