    // var btn = document.getElementById("submit");

    // var getDate = function(){
    //     event.preventDefault();
    //     var nombre = document.getElementById("nombre").value;
    //     var apellido = document.getElementById("apellido").value;
    //     var edad = document.getElementById("edad").value;
    //     var adress = document.getElementById("adress").value;
    //     alert("Su nombre es: " + nombre + "\n" + "Su apellido es: " + apellido + "\n" + "Su edad es: " + edad + "\n" + "Su direccion es: " + adress );
    //     return true;
    //     }
    var btn_nombre = document.getElementById("submit-nombre"),
        btn_apellido = document.getElementById("submit-apellido"),
        btn_adress = document.getElementById("submit-edad"),
        btn_edad = document.getElementById("submit-adress"),
        btn_peticion = document.getElementById("submit-peticion");
    
    const personalInformation = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        adress: adress
    };
    mostrarNombre = () => {
        event.preventDefault();
        alert(personalInformation.nombre.value);
    }

    mostrarApellido = () => {
        event.preventDefault();
        alert(personalInformation.apellido.value);
    }    
    mostrarEdad = () => {
        event.preventDefault();
        alert(personalInformation.edad.value);
    }
        mostrarDireccion = () => {
        event.preventDefault();
        alert(personalInformation.adress.value);
    }

    
    btn_nombre.addEventListener("click", mostrarNombre);
    btn_apellido.addEventListener("click", mostrarApellido);
    btn_edad.addEventListener("click", mostrarDireccion);
    btn_adress.addEventListener("click", mostrarEdad);
