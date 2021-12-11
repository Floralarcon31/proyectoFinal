
//animacion sube-bajalogin/registro
(function (){
    $(document).ready(function(){
       $('.alt-form').click(function(){
           $('.form-content').animate({
               height:"toggle",
               opacity:'toggle'
           },600);
           
       });

    })
}());

  //login - ingreso
function ingresarData(){

    let usuario = "flor@gmail.com";
    let clave = 123;

    let user = $("#correo").val() ;
    let contrasena = $("#pass").val();
    let error = $(".error");

    if (usuario == user  && clave == contrasena){

        redirigir();
        
    } else {
        error.html("DATOS INCORRECTOS");
      
    }


}
$("#btn1").on("click", ingresarData);


function redirigir(){
    //ingrasar a la pag
    setTimeout(function(){
        window.location= "index.html";
      }, 1000);
    alert("bienvenido!");
}

/*----------------------------------------------------------- */

/// REGISTRARTE 


function validacion() {
    
  
    let user = $("#reg-correo").val();
    let contrasena = $("#reg-pass").val();
    let contrasena2 = $("#reg-rep-pass").val();
   
    if (
      user === "" ||
      contrasena === "" ||
      contrasena2 === "" ||
      contrasena != contrasena2
     
    ) {
     alert("No se permiten campos vacíos / Revisa que la contraseña sea la misma");
    } 
   
    else {
      alert("Ahora ya estas registrado");
      //volver al login
      redirigir2();
    }
  }
  $(".btnRegistrar").on("click", validacion);
    //volver al login
  function redirigir2(){
  
    setTimeout(function(){
        window.location= "login.html";
      }, 1000);
    
}