$(document).ready(function() {
      // Funcion del boton
      $( ".generarbtn" ).click(function() {
            console.log($("#nombre").val() );
            console.log($("#apellido").val() );
            console.log($("#fecha").val() );
      });
      // Funcion del calendario
      $( function() {
            $( "#fecha" ).datepicker();
      });
});