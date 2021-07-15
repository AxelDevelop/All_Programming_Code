(function(){
	// Variables
	var lista = document.getElementById("lista"),
		//aqui arriba accedemos a "lista"
		tareaInput = document.getElementById("tareaInput"),
		//tarea imput es otro id que tenemos en el documento Html en la parte del imput de tipo texto.
		btnNuevaTarea = document.getElementById("btn-agregar");
		//este es para el input de tipo boton (si quieres puedes usar uno tipo submit)

	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
			//en este if se ejecuta el error el cual al no escribir una tarea valida surga un mensaje de error o negacion. Esto se ejecutara cuando if sea igual a nada, si no se seguira ejecutando codigos hacia abajo.
		}

		// Agregamos el contenido al enlace
		//basicamente le estamos diciendo que el contenido lo queremos poner dentro del enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		//aqui estamos ejecutando un enlace de tipo "A" pero al ejecutar esta instruccion javascript los que hace es ejecutar un elemento tipo "A" pero no le agrega atributos, entonces lo que hacemos es agregarle un href, ¿porque lo agregamos si no estamos redireccionandolo a ningun sitio? (lo cual claro es la funcion del href) lo hacemos porque sino no seria clickleable (por asi decirlo wue).
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		//aqui pondremos el enlace a la nueva tarea (li) lee arriba si no sabes. 
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		//aqui agregamos el elemento que tenemos (en este caso nueva tarea) a la lista.
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";
		//como en nuestra lista de tareas queremos que al agregar una tarea se borre lo que esta escrito en nuestro cuadro de texto lo que hacemos es que despues de que ejecute lo que esta arriba ponemos "tareaInput.value = "";" lo cual significa que nuestro cuadro de texto sera igual a nada, lo cual limpia el cuadro.

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
				//para saber como funciona this mi pana vete al video de como hacer una app lista de tareas en el munito 17:20 y lo sabras, esta muy dificil de explicar.

			});
		}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput); //aqui nos esta diciendo que cada que el input reciva un click va ejecutar la funcion "ejecutar input"

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	}
}());