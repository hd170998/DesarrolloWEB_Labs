function validar(){
    let re = new RegExp(/^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$/i)
    var nombre, apellidos, email, usuario, contra,confirmarContra;
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    contra = document.getElementById("contraseña").value;
    confirmarContra = document.getElementById("confirmar-contraseña").value;

    if(nombre==="" || apellidos===""  || usuario==="" || contra==="" || confirmarContra===""){
        alert("Campos Obligatorio");
        return false;
    }
    if (re.test(String(email).toLowerCase())){
        alert("email invalido")
        return false;
    }
    if(contra.length<6){
        alert("La contraseña debe tener 6 caracteres como mínimo.");
        return false;
    }
    if(contra!==confirmarContra){
        alert("Las contraseñas no coinciden");
        return false;
    }

    alert("¡Registrado con éxito!");
    return true;
    
}