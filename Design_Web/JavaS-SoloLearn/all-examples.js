// >>>>>>>>>>>>>>>>>>>>>>>>>>>TODO<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// -----------------DOCUMENT WRITE----------------------

// Es hora de introducir la función document.write (). Esto es lo que necesitamos usar para escribir texto en nuestro documento HTML.

document.write("<h1>hello word!</h1>");

// NOTA: document.write () debe usarse solo para pruebas. Pronto cubriremos algunos otros mecanismos de salida.


// --------------------CONSOLE LOG--------------------

// Bien, ahora somos expertos en escribir resultados HTML con document.write ().

// Es hora de un tipo diferente de salida. Aprendamos sobre la salida a la consola del navegador.

// Para esto, necesitaremos la función de confianza console.log ().

// La consola es parte del navegador web y le permite registrar mensajes, ejecutar código JavaScript y ver errores y advertencias.

        console.log("hello word!")


// ------------------------VARIABLES-----------------------

// Las variables son contenedores para almacenar valores de datos. El valor de una variable puede cambiar a lo largo del programa.

// Declarar una variable es tan simple como usar la palabra clave var. Que se vería así:

        var x = 10;

// En este ejemplo, le hemos asignado un valor de 10 a la variable x.

// Hemos utilizado la palabra asignada deliberadamente aquí, porque en JavaScript, el signo igual (=) se llama en realidad el operador de "asignación", en lugar de un operador "igual a".

// Lo que significa que en JavaScript, x = y asignará el valor de y a la variable x.

// usariamos las variables de esta manera:

        var y = 100;
        console.log(y); 

// Nota: Cada "instrucción" escrita se llama declaración. Las declaraciones de JavaScript están separadas por punto y coma.

// Nota: Es muy importante recordar que los nombres de las variables de JavaScript distinguen entre mayúsculas y minúsculas.

// --------------------------SOME RULES OF JAVASCRIPT FOR VARS------------------------

// - El primer carácter de un nombre de variable debe ser una letra, un guión bajo (_) o un signo de dólar ($) (los caracteres posteriores (osea los caracteres despues de estos signos) pueden ser letras, dígitos, guiones bajos o signos de dólar).

// - El primer carácter de un nombre de variable no puede ser un número.

// - Los nombres de las variables no pueden incluir una operacion matemática o lógica en su nombre. Por ejemplo, 2 * algo o esto + aquello;

// - Los nombres de las variables no pueden contener espacios.

// - No se le permite utilizar ningún símbolo especial, como my # num, num%, etc.


// ----------------ALERT------------------------

// alert se utiliza para crear cajas de mensajes de texto, como alertas, para poner dentro un espaciado o salto de linea le añadimos \n.



alert("mensaje de aviso")

// Nota: Tenga cuidado al usar cuadros de alerta, ya que el usuario puede continuar usando la página solo después de hacer clic en Aceptar.


// -------------------BARRAS INVERTIDAS----------------

// Ahora es un buen momento para hablar sobre el carácter de escape de barra invertida (\). Él viene al rescate cuando necesitas poner comillas dentro de cadenas (y un montón de otras situaciones) transformando caracteres especiales en caracteres de cadena.

    var sayhello = 'hello word! \'i am a javascript programmer.\' ';
    document.write(sayhello);

    // de esta manera podemos usar un comilla simple dentro de otra

    var nombre;
    // una variable es como un contenedor que puede tener un valor especifico

    var comida;

    nombre = "andry"

    //la funcion prompt nos permite almacenar un texto y un valor dentro de una caja emergente (como alert) la cual puede cancelarse o aceptarse con los valores cancelar y aceptar.

    comida = prompt ("ingresa tu nombre");

    //aqui le decimos a la funcion prompt que guarde los datos en la variable nombre. esta funcion funciona dando un cuadro de dialogo (un cuadro como un formulario para llenar, o un alert) en donde se puede poner texto, este texto se puede almacenar si usamos una variable que sea igual a esta funcion, como se ve arriba.

    edad = 19 * 2 ;
    //tambien se pueden hacer operaciones y otras cosas

    alert();
    // alert sirve para dar una alerta en el sitio, este hara que aparezca un cuadro el cual aparecera un texto

    document.write( nombre + " " + edad);

    //aqui estamos concatenando variables y poniendo espacios, de esta manera de hace, las comillas dan los espacios, los simbolos de suma solo estan para añadirlos o juntarlos (concatenar).

    // document.write nos dice que en el documento nos va a decir lo que este dentro, 
    
    console.log();

    // tambien hay otra forma que es la de la funcion console.log que hace lo mismo, lo unico que cuando escribe el valor no te lo deja ver en la pagina, sino en el inspector de elementos (consola).

    //dato curioso bro, puedes poner tanto variables como elemetos o caracteres dentro de el parentesis

    // --------------------OPERADORES MATEMATICOS--------------

// El nombre puede ser un poco obvio, pero los operadores aritméticos realizan funciones aritméticas en números (tanto literales como variables).

// + este es de adicion o suma

// ejemplo: 25 + 5 = 30

// - este de resta

// ejemplo: 25 - 5 = 20

// * multiplicacion

// ejemplo: 10 * 20 = 200

// / division 

// ejemplo: 20 / 2 = 10

// % modulo

// ejemplo: 56 % 3 = 1

// explicacion de el modulo: este divide cualquier numero entre otro hasta que llegue al numero, si este al dividirlo tiene algun sobrante que sobrepasa a este numero, el resultado sera ese sobrante, como el ejemplo de arriba, si multiplicas 3 hasta llegar al numero 56 este se pasara hasta el 57, por lo que el numero uno sera su restante.

// ++ incremento

// ejemplo: var a = a++; ahora sera 11 y seguira incrementandose

// -- decremento

// ejemplo: var a = a--; ahora sera 9 y sigue decrementando

// Nota: Puede obtener el resultado de una expresión de cadena utilizando la función eval (), que toma un argumento de expresión de cadena como eval ("10 * 20 + 8") y devuelve el resultado. Si el argumento está vacío, devuelve undefined.

// Nota: Al igual que las matemáticas que aprendiste en la escuela, puedes cambiar el orden de las operaciones aritméticas usando paréntesis.

// podemos calcular valores en una sola linea de forma mas facil (creo) de esta manera:

// x += y

// lo cual seria lo mismo que:

// x = x + y

// ---------------------OPERADORES DE COMPARACION----------------------

// Podemos usar operadores de comparación en declaraciones lógicas para averiguar si las variables o los valores son diferentes.

// Obtienes true o false.

// Por ejemplo, el operador igual a (==) comprueba si los valores de los operandos son iguales.

// ejemplo:

        // var num = 10;
        // num == 8 sera falso

// Los tipos de operadores de comparacion son:

// == este sirve para comparar, traducido diria "igual a"

// === sirve para identificar, es como decir "es identico a, igual y del mismo tipo"

// != sirve para mostrar diferencia, es como decir "no es igual a, no igual a"

// !== sirve para mostrar la diferencia en identificacion, es como decir "no es identico a"

// > mayor que

// >= mayor o igual que

// < menor 

// <= menor o igual que


// -----------------------OPERADORES LOGICOS----------------------

// Los Operadores Lógicos, también conocidos como Operadores Booleanos, (o los Operadores Vulcan… .ok, ese no es verdadero) evalúan una expresión y devuelven verdadero o falso.

// Consulte la tabla a continuación para ver más detalles sobre los operadores lógicos (Y, O, NO).



// && devuelve verdadero, si ambos operandos son verdaderos

// || devuelve verdadero, si uno de los operandos es verdadero, y tambien si los dos lo son

// ! devuelve verdadero, si el operando es falso, y falso, si el operando es verdadero
 
 
 
// ----------------CONCATENACION---------------------

// Podemos usar la concatenación (representada por el signo +) para construir cadenas formadas por múltiples cadenas más pequeñas, o uniendo cadenas con otros tipos. Echale un vistazo:

var frase1 = "primera frase";
var frase2 = "para terminar"
document.write(frase1 + " " + frase2);

// Nota: Los números entre comillas se tratan como cadenas: por lo tanto, "42" no es el número 42, es una cadena que incluye los dos caracteres separados, 4 y 2 (esto habla en caso de que usaramos numeros).

// >-----------------------CONDICIONALES-----------------<

// ---------------------IF------------------

// A menudo, cuando escribimos código, queremos realizar diferentes acciones en función de diferentes condiciones.

// Y aquí es donde entran las declaraciones condicionales.

// Hay un montón de condicionales diferentes que cubrir, pero comenzamos con uno de los más útiles: "if"

// Usamos if para especificar un bloque de código que queremos que se ejecute si una condición especificada es verdadera.

// ejemplo:

        // if(condicion){

            // instrucciones
        // }

// nota: no dare mucho detalles de los loop, ve a los ciclos en el otro archivo que esta en esta misma carpeta para poder tener mas info de ellos, abajo al final la ruta.

// -----------------------ELSE------------------

// Podemos usar la instrucción else para especificar un bloque de código que se ejecutará si la condición es falsa. Como esto:

        // else{
            // instruccones por si todos los valores son falsos
        // }

// Nota: Puede omitir las llaves si el código de la condición contiene solo un comando.

// ---------------------ELSE IF-------------------

// Hemos visto más, hemos visto si, es hora de encontrarnos con otros si.

// La instrucción else if es útil porque nos permite especificar una nueva condición si la primera condición es falsa.

        // else if {
            // intrucciones secundarias que se cumpliran si la primera no se cumple
        // }

// Nota: La sentencia else final "finaliza" la sentencia else if y siempre debe escribirse después de las sentencias if y else if.

// ejemplo de los tres:

var numP = "hola";
var num2 = 2;
var letra = "hola";

if(numP = num2){
var num = 2;
var num3 = 2;
if(num != num3){
    document.write("diferentes" + "<br>");
}

else{
    document.write("iguales" + "<br>");
}
}
else if(numP = letra){
    document.write("es una palabra" + "<br>");
}

else{
document.write(numP + " " + "no es igual" + "<br>");
}

// ----------------------------SWITCH------------------------

// Pero, ¿qué sucede si necesita realizar pruebas para detectar múltiples afecciones? En esos casos, escribir declaraciones if else para cada condición podría no ser la mejor solución.

// En su lugar, podemos usar la instrucción switch para realizar diferentes acciones en función de diferentes condiciones.

// se veria algo asi:

var day = "n1";

switch(day) {
case "n1":

// instrucciones
document.write("monday");


break;


case "n2":

// instrucciones
document.write("tuesday");

break;


case "n3":

// instrucciones
document.write("wednesday");

break;


default: 
document.write("another day");


}

// mayormente usamos esto para definir varias condiciones y intercambiar los if y if else, la declaracion break es para que esta se detenga y default es la condicion la cual ocurrira si ninguno de los casos suceden. todo esto se activara si el caso de switch es verdadero.

// Dato: La expresión de cambio se evalúa una vez. El valor de la expresión se compara con los valores de cada caso, y si hay una coincidencia, se ejecuta ese bloque de código.

// Break: Así que hemos aprendido que la instrucción switch prueba un bloque de código, pero no siempre queremos que pruebe todo el bloque. Básicamente, la palabra clave break desactiva la instrucción switch.

// La ruptura del bloque de interruptores detiene la ejecución de más pruebas de código y casos dentro del bloque.

// default: A menudo no habrá coincidencia, pero aún necesitamos que el programa genere algo ... para esto usamos la palabra clave default, que especifica el código que se ejecutará si no hay coincidencia de mayúsculas y minúsculas.

// LUEGO SIGUEN LOS LOOPS LOS CUALES SON "FOR" "WHILE" Y "DO WHILE" PERO PANA, VAYASE AL LINK QUE ESTA ABAJO, AHI HAY MAS EXPLICACION


// Dato de Break: Hemos conocido la instrucción break anteriormente en este módulo, la usamos para "saltar" de un bucle y continuar ejecutando el código después del bucle.

// Nota: Puede usar la palabra clave return para devolver algún valor inmediatamente desde el bucle dentro de una función. Esto también romperá el bucle.

// Nota: A diferencia de la instrucción break, la instrucción continue rompe solo una iteración en el ciclo y continúa con la siguiente iteración. lo que se refiere es que este seguira haciendo el ciclo aunque tenga una condicion dentro, o bien se salta la condicion, ejemplo, si hay un if dentro de un loop, y este if dice que si el numero de la variable llega a 5 continuara, el loop volara este valor y seguira, es mas como omitir.


var dias =["Lunes", "Martes", "Miercoles", "jueves", "viernes", "sabado", "domingo"];
var numerodias = dias.length -1;
var i = 0;

// --------------------------------FOR----------------------------------------

// var dias =["Lunes", "Martes", "Miercoles", "jueves", "viernes", "sabado", "domingo"]

for ( i = 0; i <= dias.length - 1; i++ )
// funciona añadiendo primero una i o variable que tenga un valor ya definido, luego despues de un punto y coma añadimos la condicion y luego su accion.

// si te preguntas como funciona esto es que la variante i es iguaal a 0, mientras i sea menor o igual a dias (que tiene el comando length que mostrara el valor de la variante) i se le sumara, como la condicion esta tomando lo que diga length, y length dice que hay 7 elementos dentro de la variante dias, la condicion pensara que son 7 y no 6 (ya que cuenta desde cero aparecera undefined, porque no hay 7 elementos sino 6 contando desde cero) y para resolver esto ponemos -1, asi elimina el 7 que indica length.

{
document.write( dias [i] + "<br>");

    // se añaden las intrucciones
}

// -------------------------------------WHILE------------------------------------------

// while (i <= numerodias);
    //la propiedad while funciona como un for y un if, el ciclo se ejecutara si la condicion es verdadera, leido seria que si la condicion se cumple (i es menor o igual a numerodias) se escribira la varibale dias la cual representara a i y se le sumara un espaciado, ademas de que se ira sumando
// {
// 	document.write( dias [i] + "<br>" );
// 	i++; 

// }
// nota: Asegúrese de que la condición en un ciclo while eventualmente se vuelva falsa.




// -----------------------------DO--------------------------

// do {

    //aqui en do siempre se ejecutara al menos una vez. osea, do siempre ejecutara una funcion aunque no pase ninguna condicion, al menos 1 sola vez aunque no se cumpla la condicion, si la condicion se cumple se seguira ejecutando.
// }while(condition){
    // instrucciones
// }

// Nota:

// Este bucle (do) ejecutará el bloque de código una vez, antes de verificar si la condición es verdadera, y luego repetirá el bucle siempre que la condición sea verdadera.

// --------------------FUNCIONES------------------

// Una function de JavaScript es un bloque de código diseñado para realizar una tarea en particular.

// Las principales ventajas de utilizar funciones:

// Reutilización de código: defina el código una vez y utilícelo muchas veces.

// Use el mismo código muchas veces con diferentes argumentos para producir resultados diferentes.

// Una función de JavaScript se ejecuta cuando "algo" la invoca o la llama.

function nombredelafuncion (){
    // codigo para ejecutar
}

// Notas: Los nombres de funciones pueden contener letras, dígitos, subrayados y signos de dólar (las mismas reglas que las variables).

// Para ejecutar la función, debe llamarla.

// Para llamar a una función, comience con el nombre de la función, luego sígala con los argumentos entre paréntesis.

nombredelafuncion();

// de esta manera

// Una vez que se define la función, JavaScript le permite llamarla tantas veces como desee.

function hello(){
    alert("box");
}

hello();

// algun otro codigo

hello()

// ---------------------------PARAMETROS PARA LA FUNCION--------------------

// Las funciones pueden tomar parámetros.

// Los parámetros de función son los nombres enumerados en la definición de la función.

// function name(param1, param2, param3){

    // algun codigo

// }

// Nota: Al igual que con las variables, los parámetros deben recibir nombres, que están separados por comas entre paréntesis.

// Usemos los parametros:

function dihola(name){
    alert("hi, " + name);

}

dihola("david");

// Esta función toma un parámetro, que se llama nombre. Al llamar a la función, proporcione el valor del parámetro (argumento) entre paréntesis.

// Los argumentos de la función son los valores reales pasados (y recibidos) por la función.

// aqui tecnicamente le dimos un valor al parametro "name" el cual lo tomo desde fuera, al hacer esto la funcion cambio el parametro a david (ya que ese fue el significado que le dimos desde fuera) y al hacer esto las intrucciones cambiaron ese parametro tambien

// Puede definir una sola función y pasarle diferentes valores de parámetros (argumentos). ejemplo:

dihola("fernando");
dihola("francisco");
//  y asi 

// Esto ejecutará el código de la función cada vez para el argumento proporcionado.

// Puede definir varios parámetros para una función separándolos por comas. ejemplo:

// function name(y,x){
    // algun codigo
// }

// Nota: Los parámetros se utilizan dentro de la definición (intrucciones) de la función. ejemplo

function decir(edad, nombre){
document.write(nombre + " is " + edad + " years old." + "<br>");

}

// Los parámetros de función son los nombres enumerados en la definición de función.

// Nota: Si se llama a una función con argumentos faltantes (menos de los declarados), los valores faltantes se establecen como indefinidos, lo que indica que a una variable no se le ha asignado un valor.

decir(13, "andry");

// ---------------------------------RETURN-----------------------

// Una función puede tener una declaración de return opcional. Se utiliza para devolver un valor de la función.

// Esta declaración es útil cuando se realizan calculos que requieren un resultado.

// Cuando JavaScript alcanza una declaración de retorno, la función deja de ejecutarse.

// Utilice la declaración de retorno para devolver un valor.

// Por ejemplo, calculemos el producto de dos números y devolvamos el resultado.

function calculo(a, b){
return a * b;

}

var x = calculo(5,6);
// el valor de retorno terminará en X

// otro ejemplo:

function calculo2(c,d){
var e = c + d;
var x = c * d;

if(e > x){
return e / x;
}

else if(e < x){
    return e * x;
}

else{
    return e - x;
}
}

document.write(calculo2(29,12));


// El comando document.write genera el valor devuelto por la función, que es la suma de los dos parámetros. yo cambie algunas cosas, ahora se devolvera los dos parametros sumados y multiplicados, y esos dos resultados se dividiran, y otras condiciones.


// -----------------------CAJAS EMERGENTES--------------

// JavaScript ofrece tres tipos de cuadros emergentes, los cuadros Alert, prompt y Confirm.

// ------------------------ALERT------------------

// alert se utiliza para crear cajas de mensajes de texto, como alertas, para poner dentro un espaciado o salto de linea le añadimos \n dentro del texto.



alert("mensaje de aviso");

// Nota: Tenga cuidado al usar cuadros de alerta, ya que el usuario puede continuar usando la página solo después de hacer clic en Aceptar.

// ----------------------PROMPT-------------------

// A menudo se usa un cuadro de aviso para que el usuario ingrese un valor antes de ingresar a una página.

// Cuando aparece un cuadro de aviso, el usuario tendrá que hacer clic en Aceptar o Cancelar para continuar después de ingresar el valor de entrada.

// Si el usuario hace clic en Ok, el cuadro devuelve el valor de entrada. Si el usuario hace clic en Cancelar, el cuadro devuelve nulo.

// El método prompt () toma dos parámetros.
// - La primera es la etiqueta, que desea mostrar en el cuadro de texto.
// - La segunda es una cadena predeterminada para mostrar en el cuadro de texto (opcional).

// ejemplo:

        var user = prompt("por favor introduzca su nombre");
        alert(user);


// Nota: Cuando aparece un cuadro de aviso, el usuario tendrá que hacer clic en "Aceptar" o "Cancelar" para continuar después de ingresar un valor de entrada. No abuse de este método, ya que evita que el usuario acceda a otras partes de la página hasta que se cierre el cuadro.

// ----------------------CONFIRM---------------------

// Un cuadro de confirmación se usa a menudo para que el usuario verifique o acepte algo.

// Cuando aparece un cuadro de confirmación, el usuario debe hacer clic en Aceptar o Cancelar para continuar.

// Si el usuario hace clic en Aceptar, el cuadro devuelve verdadero. Si el usuario hace clic en Cancelar, el cuadro devuelve falso.

        var result = confirm("tu en realidad deseas entrar a esta pagina?");

        if (result == true){
            alert( "gracias for visitarnos");
            
        }

        else{
            alert("¿porque?");
        }

// Nota: No abuse de este método, porque también evita que el usuario acceda a otras partes de la página hasta que se cierre el cuadro.

// ------------------------OBJETOS-------------------

// Las variables de JavaScript son contenedores de valores de datos. Los objetos también son variables, pero pueden contener muchos valores.

// Piense en un objeto como una lista de valores que se escriben como pares de "nombre: valor", con los nombres y los valores separados por dos puntos.

// Ejemplo:

var persona1 = {
    name: "john", 
    age: 31,
    favColor: "green",
    height: 183
    // Estos valores (los que estan dentro de la variable person) se denominan propiedades.
};
// Notas: Los objetos JavaScript son contenedores para valores con nombre.

// Puede acceder a las propiedades del objeto hay dos formas:

// esta:
// objectName.nombredelapropiedad

// ó

// objectName['nombre de la propiedad'];

// Este ejemplo demuestra cómo acceder a la edad de nuestro objeto persona:
var fuera = "john";

var persona = {
    nombre: fuera, edad: 31,
    colorFav: "green", altura: 183
};

var x = persona.edad;
var y = persona ['nombre'];

document.write(y + "<br>");
document.write(x + "<br>");


// ----------------------LENGHT---------------------

// La propiedad lenght incorporada de JavaScript se usa para contar el número de caracteres en una propiedad o cadena.

// ejemplo:

var course = {
    nombre2: "JS", lessons: 41
};

document.write(course.nombre2.length);


// Nota: Los objetos son uno de los conceptos centrales de JavaScript.

// ------------------------------METODO DE OBJETO--------------------

// Un método de objeto es una propiedad que contiene una definición de función.

// Utilice la siguiente sintaxis para acceder a un método de objeto:

// objectName.methodName()

// Nota: Como ya sabe, document.write() genera datos. La función write() es en realidad un método del objeto de documento.

document.write("<br>" + "algo de texto");

// Nota: Los métodos son funciones que se almacenan como propiedades de objeto.

// arriba, creamos un objeto usando la sintaxis literal de objeto (o inicializador) osea en la parte de la variable persona de arriba.

// Lo cual le permite crear un solo objeto.

// A veces, necesitamos establecer un "tipo de objeto" que se pueda usar para crear varios objetos de un solo tipo.

// La forma estándar de crear un "tipo de objeto" es utilizar una función de constructor de objeto.

// de esta manera:

function person (name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

// La función anterior (person) es un constructor de objetos, que toma parámetros y los asigna a las propiedades del objeto.

// ------------------------------THIS-------------------------

// La palabra clave this se refiere al objeto actual.

// Tenga en cuenta que esto no es una variable. Es una palabra clave y su valor no se puede cambiar. se refiere a la funcion que esta encima que tiene escrito los this.

// ------------------------------NEW-----------------------

// Una vez que tenga un constructor de objetos, puede usar la palabra clave "new" para crear nuevos objetos del mismo tipo.

// ejemplo:

var p1 = new person("john", 42, "green");
var p2 = new person("amy", 21, "red");

document.write("<br>" + p1.age + " " + p1.name); //dara una salida de 42
document.write("<br>" + p2.name); //dara una salida de amy

// p1 y p2 ahora son objetos del tipo de persona. Sus propiedades se asignan a los valores correspondientes.

// Nota: Acceda a las propiedades del objeto utilizando la sintaxis de puntos, como lo hizo antes.

// --------------------INICIALIZACION DE OBJETOS--------------------------

// Utilice la sintaxis de inicializador o literal de objeto para crear objetos individuales.

// ejemplo:

var john = {name: "jhon", age: 25};
var james = {name: "james", age: 21};

// Nota: Los objetos constan de propiedades que se utilizan para describir un objeto. Los valores de las propiedades del objeto pueden contener tipos de datos primitivos u otros objetos.

// Nota: Los espacios y los saltos de línea no son importantes. Una definición de objeto puede abarcar varias líneas.

// Nota: Independientemente de cómo se cree el objeto, la sintaxis para acceder a las propiedades y métodos no cambia.

// No se olvide de la segunda sintaxis de acceso: John ['age'].

// ----------------------METODOS--------------------

// Los métodos son funciones que se almacenan como propiedades de objeto.

// esta es la sintaxys para crear un metodo de objeto:

    // methodName = function (Parametros){

        // lines de codigo

    // }

// Acceda a un método de objeto utilizando la siguiente sintaxis:

    // objectname.methodName()


// Un método es una función que pertenece a un objeto. Se puede hacer referencia a él mediante la palabra clave this.

// La palabra clave this se usa como referencia al objeto actual, lo que significa que puede acceder a las propiedades y métodos de los objetos usándolo.

// Nota: La definición de métodos se realiza dentro de la función constructora.

// por ejemplo:

var i = 12;
var z = 11;

function personaje(name, age){
this.name = name;
this.age =  age;
this.changeName = function (name){
    this.name = name;
}
this.changeNumber = function (age){
    this.age = age;
}
}

var p = new personaje("david", 21);

if(i < z){
p.changeName("jhon");
document.write(p.name + "<br>");

}
else{
p.changeNumber(90);
document.write(p.age + "<br>");
}

// ahora p.name sera igual a jhon (le hice mas cambios como añadirle una condicional)

// En el ejemplo anterior, hemos definido un método llamado changeName para nuestra persona, que es una función, que toma un nombre de parámetro y lo asigna a la propiedad name del objeto.

// this.name se refiere a la propiedad de nombre del objeto.

// El método changeName cambia la propiedad del nombre del objeto a su argumento.

// También puede definir la función fuera de la función constructora y asociarla con el objeto.

// de esta manera:

function algo(name1, age1){
this.name1 = name1;
this.age1 = age1;
this.yearOfBirth = bornYear;
}

function bornYear (){
return 2016 - this.age1;
}



// Como puede ver, hemos asignado la propiedad yearOfBirth del objeto a la función bornYear.

// La palabra clave this se usa para acceder a la propiedad age del objeto, que va a llamar al método.

// Nota: Tenga en cuenta que no es necesario escribir los paréntesis de la función al asignarla a un objeto.

// ------------------LLAME AL METODO COMO DE COSTUMBRE----------------------

// Ejemplo:

function alguien(name3, age3){
this.name3 = name3;
this.age3 = age3;
this.añosPorCumplir = añoCumplido;

}
function añoCumplido() {
return 2021 - this.age3 + "<br>";
}

var e = new alguien("A", 22);
document.write(e.añosPorCumplir());

// Llame al método por el nombre de propiedad que especificó en la función constructora, en lugar del nombre de la función.

var primero = 23;
var primero2 = 45;
var primero3 = 12;


function numero (num1, num2, num3){
this.num1 = num1;
this.num2 = num2;
this.num3 = num3;
this.resultado = ecuacion;

}

function ecuacion (){
return this.num1 * this.num2 / this.num3;
}

var numX = new numero(primero, primero2, primero3);
document.write(numX.resultado());

// -------------------OBJETOS CENTRALES-----------------------------

// --------------------ARRAYS (MATRIZ)--------------------------

// Los "arrays" almacenan varios valores en una sola variable.

// Para almacenar tres nombres de cursos, necesita tres variables.

//        var curso1 = "HTML";
//        var curso2 = "CSS";
//        var curso3 = "JS";

// muy tedioso no? y si fueran 500 cursos que harias? la solucion seria un array (arreglo) o una variable que contenga todos estos significados. por ejemplo:

//        var cursos = new Array ("HTML", "CSS", "JS");

// Esta sintaxis declara una matriz denominada cursos, que almacena tres valores o elementos.

// se necesitan las palabras new y array para crear la variable con varias propiedades

// --------------------ACCEDIENDO A UNA MATRIZ-------------------

// Se refiere a un elemento de matriz refiriéndose al número de índice escrito entre corchetes.

// Esta declaración accede al valor del primer elemento en los cursos y cambia el valor del segundo elemento.

var cursos = new Array ("HTML", "CSS", "JS");

var cursos = cursos[0]; // nota: en la seleccion comenzara a contar desde 0, osea, en este caso el cero dentro se refire a la palabra (HTML) que esta dentro de la matriz o el array.

cursos[1] = "C++";
 //  aqui acaba de cambiar el elemento "CSS" por "C++"

// Nota: [0] es el primer elemento de una matriz. [1] es el segundo. Los índices de matriz comienzan con 0.

// ---------------------------CREANDO MATRIZ (DE OTRA FORMA)----------------------------

// También puede declarar una matriz, decirle la cantidad de elementos que almacenará y agregar los elementos más tarde.

// de esta manera:

    var aulas = new Array (3);
    aulas[0] = "HTML";
    aulas[1] = "CSS";
    aulas[2] = "JS";
    document.write(aulas + "<br>");

// Una matriz es un tipo especial de objeto.

// Una matriz usa números para acceder a sus elementos y un objeto usa nombres para acceder a sus miembros.

// Nota: Las matrices de JavaScript son dinámicas, por lo que puede declarar una matriz y no pasar ningún argumento con el constructor Array (). Luego puede agregar los elementos dinámicamente.

// ------------------------------ARRAY LITERAL------------------------

// Para mayor simplicidad, legibilidad y velocidad de ejecución, también puede declarar matrices utilizando la sintaxis literal de matriz.

// De esta manera:

   var cosas = ["HTML", "CSS", "JS"]; 

// Esto da como resultado la misma matriz que la creada con la new Array ().


// --------------------------COMBINAR MATRICES ( CONCAT() )-------------------------

// El método concat () de JavaScript le permite unir matrices y crear una matriz completamente nueva.

// de esta manera:

    var c1 = ["HTML", "CSS"];
    var c2 = ["JS", "C++"];
    var ctotal = c1.concat(c2);
    document.write(ctotal + "<br>");

// La matriz de ctotal resultante contiene 4 elementos (HTML, CSS, JS, C ++).


// -----------------------MATRICES ASOCIADAS----------------------------

// Si bien muchos lenguajes de programación admiten matrices con índices con nombre (texto en lugar de números), JavaScript no lo hace.

// Sin embargo, aún puede usar la sintaxis de matriz nombrada, que producirá un objeto.

// por ejemplo:

    var person = []; //matriz vacia
    person ["name"] = "jhon";
    person ["age"] = 46;
    document.write(person["name"] + "<br>");

// Ahora, la variable  person se trata como un objeto, en lugar de ser una matriz.

// Los índices nombrados "nombre" y "edad" se convierten en propiedades del objeto persona.

// Nota:  Como la matriz de personas se trata como un objeto, los métodos y propiedades de la matriz estándar producirán resultados incorrectos. Por ejemplo, person.length devolverá 0.


// ------------------------NOTAS DE LOS OBJETOS------------------------

// Recuerde que JavaScript no admite matrices con índices con nombre. 

// En JavaScript, las matrices siempre usan índices numerados.

// Es mejor usar un objeto cuando desea que el índice sea una cadena (texto).

// Utilice una matriz cuando desee que el índice sea un número.

// Si usa un índice con nombre, JavaScript redefinirá la matriz a un objeto estándar.

// --------------------------OBJETO MATH----------------------

// El objeto Math le permite realizar tareas matemáticas e incluye varias propiedades.

//      Propiedades:        Descripcion:

     // E                Constante de euler.

     // LN2              logaritmo natural del valor 2.

     // LN10             logaritmo natural del valor 10.

     // LOG2E            el logaritmo de base 2 de la constante de Euler.

     // LOG10E           el logaritmo de base 10 de la constante de Euler.

     // PI               devuelve la constante de PI.


    document.write(Math.LN10);

 // ----------------------------Métodos de objetos matemáticos-------------------


 // El objeto Math contiene varios métodos que se utilizan para los cálculos:

 // Method:                     Descripcion:

 // abs(x)                      devuelve el valor absoluto de x.

 // acos(x)                     devuelve el arcocoseno de x, en radianes.

 // asin(x)                     devuelve el arcoseno de x, en radianes.

 // atan(x)                     devuelve el arcotangente de x como un valor numérico entre -PI / 2 y PI / 2 radianes.

 // atan2(x,y)                    devuelve el arcotangente del cociente de sus argumentos.

 // ceil(x)                     devuelve x, redondeado hacia arriba al número entero más cercano.

 // cos(x)                      devuelve el coseno de x (x está en radianes).        

 // exp(x)                      devuelve el valor de E elevado a x.

 // floor(x)                    devuelve x, redondeado hacia abajo al número entero más cercano.

 // log(x)                      devuelve el logaritmo natural (base E) de x.

 // max(x,y,z,....n)            devuelve el número con el valor más alto.

 // min(x,y,z,....n)            devuelve el número con el valor más bajo.

 // pow(x,y)                    devuelve el valor de x elevado a y.

 // random()                    devuelve un número aleatorio entre 0 y 1.

 // round(x)                    redondea x al número entero más cercano.

 // sin(x)                      devuelve el seno de x (x está en radianes).

 // sqrt(x)                     devuelve la raíz cuadrada de x.

 // tan(x)                      devuelve la tangente de un ángulo.

// se usaria de la siguiente manera:

     document.write("<br>" + Math.cos(3));

     document.write("<br>" + Math.max(2,3,4,5,2,1,3,2));

     document.write("<br>" + Math.pow(2,5));

     var number = "<br>" + Math.sqrt(4);
     document.write(number);


// Nota: Para obtener un número aleatorio entre 1-10, use Math.random (), que le da un número entre 0-1. Luego multiplique el número por 10, y luego tome Math.ceil () de él: Math.ceil (Math.random () * 10).

     var infinito = 1;

for(i = 0; i < infinito; i++){
document.write("<br>" + Math.ceil( Math.random() * 100) + "<br>");
}

// ----------------------EJEMPLO-------------------------

// Creemos un programa que le pedirá al usuario que ingrese un número y alertará a su raíz cuadrada.

     var n = prompt("Escribe un numero");
     var respuesta = Math.sqrt(n);
     alert("La raiz cuadrada de " + n + " es " + respuesta);

// Nota: Las matemáticas son un objeto útil. Puede ahorrar mucho tiempo usando Math, en lugar de escribir sus propias funciones cada vez.


// primera forma 
 var ma = [];
 ma ["numero1"] = "buenaos dias"; 
 ma ["numero2"] = "buenas tardes";
 ma ["numero3"] = "buenas noches";

 document.write(ma["numero3"] + "<br>");

// segunda forma:

 var ma2 = ["hola", "oda", "como tas?"];
 document.write(ma2[2]);

// las demas son con new Array



// -------------------------SET INTERVAL--------------------

// El método setInterval () llama a una función o evalúa una expresión a intervalos específicos (en milisegundos).

// Continuará llamando a la función hasta que se llame a clearInterval () o se cierre la ventana.

// un ejemplo seria como esto:

function myAlert(){
    alert("HI");

}
//    setInterval(myAlert, 3000);

    // Esto llamará a la función myAlert cada 3 segundos (1000 ms = 1 segundo).

// Nota: Escriba el nombre de la función sin paréntesis al pasarlo al método setInterval.

// ------------------------EL OBJETO DATE---------------------

// El objeto Date nos permite trabajar con fechas.

// Un date consta de un año, un mes, un día, una hora, un minuto, un segundo y milisegundos.

// Usando new Date (), cree un nuevo objeto de fecha con la fecha y hora actuales

// var d = new Date();
// la variable d almacenara la fecha y tiempo actuales.

// Las otras formas de inicializar fechas permiten la creación de nuevos objetos de fecha a partir de la fecha y hora especificadas.

// algo asi:

var datos = new Date();
var hora = datos.getFullYear();
document.write(hora);
// new Date(dateString)
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// estos son los datos que puede almacenar el objeto Date

// Nota: Las fechas de JavaScript se calculan en milisegundos desde el 1 de enero de 1970 a las 00:00:00, hora universal (UTC). Un día contiene 86,400,000 milisegundos.

////Fri Jan 02 1970 00:00:00
//var d1 = new Date(86400000); 

////Fri Jan 02 2015 10:42:00
//var d2 = new Date("January 2, 2015 10:42:00");

////Sat Jun 11 1988 11:42:00
//var d3 = new Date(88,5,11,11,42,0,0);

// Nota: JavaScript cuenta los meses del 0 al 11. Enero es 0 y diciembre es 11.

// Los objetos de fecha son estáticos, en lugar de dinámicos. El tiempo de la computadora avanza, pero los objetos de fecha no cambian, una vez creados.

// ------------------------------OBJETOS DATE------------------------

// Cuando se crea un objeto Date, varios métodos permiten realizar operaciones en él.


//        Metodo:                         Descripcion:
//
//        getFullYear()                   Obtiene el año.
//
//        getMonth()                      Obtiene los meses.
//
//        getDate()                       Obtiene los dias del mes.
//
//        getDay()                        Obtiene los dias de la semana.
//
//        getHours()                      Obtiene las horas.
//
//        getMinutes()                    Obtiene los minutos.
//
//        getSeconds()                    Obtiene los segundos.
//
//        getMilliSeconds()               Obtiene los milisegundos


// Por ejemplo:

// var d = new Date();
// var horas = d.getHours();
// //horas seria igua a las horas actualmente
// document.write(horas);

// -----------------------------------------------------------------------------

// Creemos un programa que imprima la hora actual en el navegador una vez por segundo.

function printTime (){
    var date = new Date ();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    document.getElementById("demo").innerHTML = hours+":"+mins+":"+secs;
    
}

var intervalo = setInterval(printTime, 1000);


// Declaramos una función printTime (), que obtiene la hora actual del objeto de fecha y la imprime en la pantalla.

// Luego llamamos a la función una vez por segundo, usando el método setInterval.


// ---------------------------INNERHTML-------------------------

// La propiedad innerHTML establece o devuelve el contenido HTML de un elemento.

// En nuestro caso, estamos cambiando el contenido HTML del cuerpo de nuestro documento. Esto sobrescribe el contenido cada segundo, en lugar de imprimirlo repetidamente en la pantalla.

// ---------------------------DOM-----------------------

// Cuando abre cualquier página web en un navegador, el HTML de la página se carga y se representa visualmente en la pantalla.

// Para lograr eso, el navegador construye el Modelo de objetos de documento de esa página, que es un modelo orientado a objetos de su estructura lógica.

// El DOM de un documento HTML se puede representar como un conjunto anidado de cajas

// JavaScript se puede utilizar para manipular el DOM de una página de forma dinámica para agregar, eliminar y modificar elementos.

// ----------------------DOM TREE----------------------------

// El DOM representa un documento como una estructura de árbol.

// Los elementos HTML se convierten en nodos interrelacionados en el árbol.

// Todos esos nodos del árbol tienen algún tipo de relación entre sí.

// Los nodos pueden tener nodos secundarios. Los nodos del mismo nivel de árbol se denominan hermanos.

// Es importante comprender las relaciones entre los elementos de un documento HTML para poder manipularlos con JavaScript.

// --------------------THE DOCUMENT OBJECT-----------------------

// Hay un objeto de documento predefinido en JavaScript, que se puede utilizar para acceder a todos los elementos del DOM.

// En otras palabras, el objeto del documento es el propietario (o raíz) de todos los objetos de su página web.

// Por lo tanto, si desea acceder a los objetos en una página HTML, siempre comienze accediendo al objeto del documento.

// Por ejemplo:

// ------------------------INNERHTML----------------------

document.body.innerHTML = "some text";

// Como body es un elemento del DOM, podemos acceder a él usando el objeto de documento y cambiar el contenido de la propiedad innerHTML.

// La propiedad innerHTML se puede utilizar en casi todos los elementos HTML para cambiar su contenido.

// -----------------------SELECCION DE ELEMENTOS-------------------

// Todos los elementos HTML son objetos. Y como sabemos, todo objeto tiene propiedades y métodos.

// El objeto de documento tiene métodos que le permiten seleccionar el elemento HTML deseado.

// Estos tres métodos son los más utilizados para seleccionar elementos HTML:

// Buscar elementos por su ID:

        // document.getElementById(id_del_elemento);

// Buscar elementos por su nombre de clase:

        // document.getElementsByClassName(nombre_de_la_clase);

// Buscar elementos por el nombre de su etiqueta:

        // document.getElementsByName(nombre_de_la_etiqueta);

// ---------------------getElementById--------------------------

// En el siguiente ejemplo, el método getElementById se usa para seleccionar el elemento con id = "demo" y cambiar su contenido:

var element = document.getElementById("demo");
element.innerHTML = "hello word";

// El ejemplo anterior asume que el HTML contiene un elemento con id = "demo", por ejemplo <div id = "demo"> </div>.

// -------------------------getElementsByClassName---------------------

// El método getElementsByClassName () devuelve una colección de todos los elementos del documento con el nombre de clase especificado.

// Por ejemplo, si nuestra página HTML contiene tres elementos con class = "demo", el siguiente código devolvería todos esos elementos como una matriz:

var arr = document.getElementsByClassName("demo");

// ahora accederemos al segundo elemento:
arr[0].innerHTML = "hi";
arr[1].innerHTML = "how are you";
arr[2].innerHTML = "it´s fine";


// ----------------------GETELEMENTBYTAGNAME-----------------------

// De manera similar, el método getElementsByTagName devuelve todos los elementos del nombre de etiqueta especificado como una matriz.

// El siguiente ejemplo obtiene todos los elementos de párrafo de la página y cambia su contenido:

// en html:
// <p>hi</p>
// <p>hello</p>
// <p>hi</p>

// en JS:

var arr = document.getElementsByTagName("p");


for (var x = 0; x < arr.length; x++) {
arr[x].innerHTML = "HOLAAA";
}


// El script dará como resultado el siguiente HTML:

// <p>Hi there</p>
// <p>Hi there</p>
// <p>Hi there</p>

// el  otro script dara resultado "wenas" en cada uno de los p con la clase cambio

// Nota: Usamos la propiedad length de la matriz para recorrer todos los elementos seleccionados en el ejemplo anterior.

// --------------------TRABAJANDO CON EL DOM---------------------------

// Cada elemento del DOM tiene un conjunto de propiedades y métodos que proporcionan información sobre sus relaciones en el DOM:

// element.childNodes devuelve una matriz de los nodos secundarios de un elemento.

var x = document.getElementById("nodo").childNodes;
console.log(x);

// element.firstChild devuelve el primer nodo hijo de un elemento.

var x = document.getElementById("nodo").firstElementChild;
console.log(x);

// element.lastChild devuelve el último nodo hijo de un elemento.

var x = document.getElementById("nodo").lastElementChild;
console.log(x);

// element.hasChildNodes() devuelve verdadero si un elemento tiene nodos secundarios; de lo contrario, es falso.

var x = document.getElementById("nodo").hasChildNodes();
console.log(x);

// element.nextSibling devuelve el siguiente nodo en el mismo nivel de árbol.

var x = document.getElementById("nodo2").nextElementSibling;
console.log(x);

// element.previousSibling devuelve el nodo anterior en el mismo nivel de árbol.

var x = document.getElementById("nodo").previousElementSibling;
console.log(x);

// element.parentNode devuelve el nodo padre de un elemento.

var x = document.getElementById("nodo2").parentNode;
console.log(x);

// Nota: para que los selectores de nodo no nos devuelvan los espacios en blanco (#text) en el arbol del documento, añadimos la palabra Element(s) para que solo nos tome los elementos y no los espacios en blanco

// -------------------CHANGING ATTRIBUTES----------------

// Una vez que haya seleccionado los elementos con los que desea trabajar, puede cambiar sus atributos.

// Como hemos visto en las lecciones anteriores, podemos cambiar el contenido de texto de un elemento usando la propiedad innerHTML.

// Del mismo modo, podemos cambiar los atributos de los elementos.

// por ejemplo cambiar el atributo src:

    // <img id="myimg" src="orange.png" alt="" />

    var el = document.getElementById("myimg");
    el.src = "tree.jpg";


    // o el href llamando su etiqueta como arriba:

        // <a href="http://example.com">some link</a>

        var  la = document.getElementsByTagName("a");
        la[0].href = "http://sololearn.com";

// Nota: Prácticamente todos los atributos de un elemento se pueden cambiar usando JavaScript.

// --------------------CAMBIO DE ESTILO (OBJETO STYLE)---------------------

// El estilo de los elementos HTML también se puede cambiar usando JavaScript.

// Se puede acceder a todos los atributos de estilo utilizando el objeto de estilo del elemento.

            // <div id="demo" styles="width:200px">some text</div>


            var x = document.getElementById("demo");
            x.style.color = "#6600ff";
            x.style.width = "100px";
            x.style.fontSize = "100px";

// El código anterior cambia el color del texto y el ancho del elemento div. (tambien una que otra cosa)

// Nota: Todas las propiedades de CSS se pueden configurar y modificar mediante JavaScript. Solo recuerde que no puede usar guiones (-) en los nombres de las propiedades: estos se reemplazan con versiones de camelCase, donde las palabras compuestas comienzan con una letra mayúscula.

// Por ejemplo: la propiedad background-color debe denominarse backgroundColor.


// -----------------CREANDO ELEMENTOS-------------------------

// Utilice los siguientes métodos para crear nuevos nodos:

// element.cloneNode () clona un elemento y devuelve el nodo resultante.

// document.createElement (elemento) crea un nuevo nodo de elemento.

// document.createTextNode (texto) crea un nuevo nodo de texto.

// Por ejemplo:

var node1 = document.createTextNode("some new text");
console.log(node1);

// Esto creará un nuevo nodo de texto, pero no aparecerá en el documento hasta que lo agregue a un elemento existente con uno de los siguientes métodos:

// element.appendChild(newNode) agrega un nuevo nodo hijo a un elemento como último nodo hijo.

// element.insertBefore(node1, node2) inserta node1 como hijo antes de node2.

// ejemplo, vamos a crear un parrafo:

// html:
// <div> id="demo"> algo de texto o contenido</div>

// JavaScript:

// primero crear el elemento parrafo:

var p = document.createElement("p");
var node = document.createTextNode("algo de texto");
var nodeT = document.createTextNode("algo de texto pero por dos");


// ahora añadiremos un texto al parrafo
p.appendChild(node);

// ahora llamamos al div para añadirle este parrafo
var div = document.getElementById("demo");

// añadimos el parrafo a el div
div.appendChild(p);

// aqui debajo tenemos un ejemplo de cloneNode:

var clone = p.cloneNode();

div.appendChild(clone);

// este es un extra:

var b = document.createElement("b");
b.appendChild(nodeT);
div.appendChild(b);


// Esto crea un nuevo párrafo y lo agrega al elemento div existente en la página.

// ------------------------REMOVIENDO ELEMENTOS---------------------

// Para eliminar un elemento HTML, debe seleccionar el padre del elemento y utilizar el método removeChild (nodo).

// HTML:
        
    // <div id="demo">
    //     <p id="p1">este es un parrafo</p>
    //     <p id="p2">este es otro parrafo</p>

    // </div>

// JavaScript:

var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.removeChild(child);

// Esto elimina el párrafo con id = "p1" de la página.

// otra manera era llamando al padre y borrando su hijo

// Una forma alternativa de lograr el mismo resultado sería el uso de la propiedad parentNode para obtener el padre del elemento que queremos eliminar:

var child2 = document.getElementById ("p2");
child2.parentNode.removeChild (child2);

// ------------------------REEMPLAZANDO NODOS O ELEMENTOS---------------------

// Para reemplazar un elemento HTML, se usa el método element.replaceChild (newNode, oldNode).

// HTML:

    // <div id="demo">
    //         <p id="p1">este es un parrafo</p>
    //         <p id="p2">este es un parrafo</p>

    //     </div>

// javaScript:

var p = document.createElement("p");
var node = document.createTextNode("nuevo año");
p.appendChild(node);

var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.replaceChild(p, child);

// El código anterior crea un nuevo elemento de párrafo que reemplaza el párrafo p1 existente.


// --------------------ANIMATIONS----------------------

// Ahora que sabemos cómo seleccionar y cambiar elementos DOM, podemos crear una animación simple.

// Creemos una página HTML simple con un elemento de cuadro que se animará usando JS.
            
// Nota: (en la pagina) Nuestro elemento de caja está dentro de un elemento contenedor. Tenga en cuenta el atributo de posición utilizado para los elementos: el contenedor es relativo y la caja es absoluta. Esto nos permitirá crear la animación relativa al contenedor.

// Animaremos el cuadro rojo para que se mueva hacia el lado derecho del contenedor.

// Nota: Debe estar familiarizado con CSS para comprender mejor el código proporcionado.


// -------------------CREAR UNA ANIMACION-------------------

// Para crear una animación, necesitamos cambiar las propiedades de un elemento en pequeños intervalos de tiempo. Podemos lograr esto usando el método setInterval (), que nos permite crear un temporizador y llamar a una función para cambiar propiedades repetidamente a intervalos definidos (en milisegundos).
    
    // por ejemplo:

    var t = setInterval(move, 500);

    // Este código crea un temporizador que llama a una función move () cada 500 milisegundos.
    
    // Ahora necesitamos definir la función move (), que cambia la posición del cuadro.
    
    // empezamos:   
    
            // posicion inicial:
    
            var pos = 0;
    
            // nuestro elemento box:
            var doc = document.getElementById("box");
            
            // funcion para la annimacion de movimiento:
    
            function move (){
                pos += 1;
                box.style.left = pos+ "px"; //son pixeles, no te confundas
            }
    
    // La función move () incrementa la propiedad izquierda del elemento box en uno cada vez que se llama.
    
    // -------------------PRACTICA 2-------------------------
    
    // El siguiente código define un temporizador que llama a la función move () cada 10 milisegundos:
    
            var pos2 = 0;
    
            var t2 = setInterval(move2, 10);
    
    // Sin embargo, en el ejemplo arriba pasa un error, ya que nuestro cuadro se mueva hacia la derecha para siempre. Para detener la animación cuando el cuadro llega al final del contenedor, agregamos una simple marca a la función move () y usamos el método clearInterval () para detener el temporizador.
    
            function move2 (){
                if (pos2 >= 150){
                    clearInterval(t2);
                }
                else{
                    pos2 += 1;
                    box2.style.left = pos2+"px";
                }
            }
    
    // ¡Felicitaciones, acaba de crear su primera animación de JavaScript!

// -------------------------EVENTS-------------------

// Puede escribir código JavaScript que se ejecute cuando ocurre un evento, como cuando un usuario hace clic en un elemento HTML, mueve el mouse o envía un formulario.

// Cuando ocurre un evento en un elemento de destino, se ejecuta una función de controlador.

// Los eventos HTML comunes incluyen:



// onclick: 

// ocurre cuando el usuario hace clic en un elemento.

// onload: 

// ocurre cuando un objeto se ha cargado.

// onunload: 

// ocurre una vez que se ha descargado una página (para <body>).

// onchange: 

// ocurre cuando el contenido de un elemento de formulario, la selección o el estado marcado han cambiado (para <input>, <keygen>, <select> y <textarea>).

// onmouseover:

// ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.

// onmouseout: 

// ocurre cuando un usuario mueve el puntero del mouse fuera de un elemento, o fuera de uno de sus elementos secundarios.

// onmousedown: 

// ocurre cuando el usuario presiona un botón del mouse sobre un elemento.

// onmouseup: 

// ocurre cuando el usuario suelta un botón del mouse sobre un elemento.

// onblur: 

// ocurre cuando un elemento pierde el foco.

// onfocus: 

// ocurre cuando un elemento se enfoca.


// Nota: Los eventos correspondientes se pueden agregar a los elementos HTML como atributos.

// ejemplos:

// ejemplo1:

function show(){
    alert("hi there");
}

// ejemplo2

var x = document.getElementById("demo");
x.onclick = function (){
    var tiempo = new Date ();
    var horas =  tiempo.getSeconds();
    document.getElementById('demo2').innerHTML = horas;
}

// ejemplo3:

var var1 = document.getElementById('prueba');

function prueba () {
    var1.classList.toggle("prueba")
}

// --------------------------HANDLING EVENTS----------------------

// --------------------ONCLICK--------------------

// Vamos a mostrar una ventana emergente de alerta cuando el usuario hace clic en un botón específico:

//     aqui el boton 

// este es el elemento de manejo:

function show (){
    alert("hi there");
}

// Los controladores de eventos se pueden asignar a elementos.

// por ejemplo:


var x = document.getElementById("demo");
x.onclick = function(){
    document.body.innerHTML = Date();
}


// Nota: Puede adjuntar eventos a casi todos los elementos HTML.

// -----------------ONLOAD y ONUNLOAD------------------------

// Los eventos onload y onunload se activan cuando el usuario entra o sale de la página.

// Estos pueden ser útiles al realizar acciones después de que se cargue la página.

// ejemplo si ponemos un atributo a body (<body onload="alguna accion()"> de esta manera) 

// De manera similar, el evento window.onload se puede usar para ejecutar código después de que se cargue toda la página.

// de esta manera:

// window.onload = function(){
//     //algun codigo.
// }


// --------------------ONCHANGE------------------------

// El evento onchange se usa principalmente en cuadros de texto. Se llama al controlador de eventos cuando el texto dentro del cuadro de texto cambia y se pierde el foco del elemento.

// por ejemplo:

// HTML: 

// <input type="text" id="name" onchange="change()">

// JAVASCRIPT:

function change (){
var x = document.getElementById("name"); //ya sabes esta parte, es la de buscar el id.

x.value = x.value.toUpperCase();
}

// Nota: Es importante comprender los eventos, porque son una parte esencial de las páginas web dinámicas.


// ------------------------EVENTS LISTENERS-------------------

// El método addEventListener () adjunta un controlador de eventos a un elemento sin sobrescribir los controladores de eventos existentes. Puede agregar muchos controladores de eventos a un elemento.

// También puede agregar muchos controladores de eventos del mismo tipo a un elemento, es decir, dos eventos de "clic".

// El metodo se ve de esta manera:

        // element.addEventListener(evento, funcion, useCapture);


                            // EXPLICACION:

// El primer parámetro es el tipo de evento (como "clic" o "mousedown").

// El segundo parámetro es la función que queremos llamar cuando ocurre el evento.

// El tercer parámetro es un valor booleano que especifica si se utilizará el burbujeo de eventos o la captura de eventos. Este parámetro es opcional y se describirá en la próxima lección.

// Esto agrega dos detectores de eventos al elemento.

// Podemos eliminar uno de los oyentes:

// -------------------------EJEMPLO 1----------------

var element = document.getElementById("demo");
element.addEventListener("click", myFunction);
element.addEventListener("mouseout", myFunction); //(mouse over es cuando el raton esta sobre el elemento)

function myFunction() {
alert("Hello World!");
}

// ---------------------------REMOVER UN DETECTOR DE EVENTOS -removeEventListener() (ESTO VA CON EL EJEMPLO DE ARRIBA).----------------

// arriba se agrego dos detectores de eventos al elemento.

// Podemos eliminar uno de los oyentes:

// ------------------PRACTICA-------------------

// Nota: el html esta arriba, lo cual solo es un boton con un id XD:

// JAVASCRIPT:

var btn = document.getElementById("demo2");
btn.addEventListener("click", myFunction2);

function myFunction2(){
    alert(Math.random());
    btn.removeEventListener("click", myFunction2);
}

// -------------------EXPLICACION----------------

// Después de hacer clic en el botón, se muestra una alerta con un número aleatorio y se elimina el detector de eventos.

// Nota: Internet Explorer versión 8 y anteriores no admiten los métodos addEventListener () y removeEventListener (). Sin embargo, puede utilizar el método document.attachEvent () para adjuntar controladores de eventos en Internet Explorer.

// ---------------------EVENT PROPAGATION--------------------

// Hay dos formas de propagación de eventos en HTML DOM: burbujeo y captura.

// La propagación de eventos permite definir el orden de los elementos cuando ocurre un evento. Si tiene un elemento <p> dentro de un elemento <div>, y el usuario hace clic en el elemento <p>, ¿qué evento "clic" del elemento debe manejarse primero?

// En el bubbling, el evento del elemento más interno se maneja primero y luego se maneja el evento del elemento externo. El evento de clic del elemento <p> se maneja primero, seguido por el evento de clic del elemento <div>.

// En capturing, el evento del elemento más externo se maneja primero y luego el interno. El evento de clic del elemento <div> se maneja primero, seguido por el evento de clic del elemento <p>.

// Nota: La capturing pasa por el DOM.
// El burbbling sube por el DOM.


// --------------CAPTURING VS BLUBLING---------------------

// El método addEventListener () le permite especificar el tipo de propagación con el parámetro "useCapture".

// Ejemplo:

    // addEventListener(event, funcion, useCapture);

// El valor predeterminado es falso, lo que significa que se utiliza la propagación de burbujeo (bubbling); cuando el valor se establece en verdadero, el evento utiliza la propagación de captura (capturing).

// ejemplo:
    
        //Capturing propagation
    // elem1.addEventListener("click", myFunction, true); 

    //Bubbling propagation
    // elem2.addEventListener("click", myFunction, false);

// Nota: Esto es particularmente útil cuando tiene el mismo evento manejado para múltiples elementos en la jerarquía DOM.

// este es otro ejemplo mas claro:

// ---------------------------------BLUBLING--------------------------

function formFn()
{
alert('form');
}

function divFn()
{
alert('div');
}  

function pFn(e)
{
alert('p');
e.stopPropagation();
}

// ---------------------------CAPTURING----------------------


var usarCapture = true;
document.querySelector("#form")
.addEventListener("click", function(r){

alert("clic sobre form");

}, usarCapture);

document.querySelector("#p")
.addEventListener("click", function(r){
alert("clic sobre p");
}, !usarCapture);

// dato:
// El signo de exclamación hace que cualquier función siempre devuelva un valor booleano. El valor final es la negación del valor devuelto por la función.

!function bool() { return false; }() // true
!function bool() { return true; }() // false
// Omitir ! en los ejemplos anteriores sería un error de sintaxis.

// function bool() { return true; }() // SyntaxError
// Sin embargo, una mejor manera de lograr esto sería:

(function bool() { return true; })() // true

// ----------------------IMAGE SLIDER-------------------------

// Ahora podemos crear un proyecto de control deslizante de imagen de muestra. Las imágenes se cambiarán usando los botones "Siguiente" y "Anterior".

// Ahora, creemos nuestro HTML, que incluye una imagen y los dos botones de navegación. (esta arriba en el HTML)

// A continuación, definamos nuestras imágenes de muestra en una matriz:

var images = [
    "../css/blue space.jpg",
    "../css/imagen1.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_960_720.jpg"
    ];

    
// Nota: Vamos a utilizar tres imágenes de muestra que hemos subido a nuestro servidor. Puede utilizar cualquier número de imágenes.

// --------------------PASO 2-------------------

// Ahora necesitamos manejar los clics de los botones NEXT y PREV y llamar a las funciones correspondientes para cambiar la imagen.

// JS:

    var number = 0;

    function next (){
        var slider = document.getElementById("slider");
        number++;

        if(number >= images.length){
            number = 0;
        }
        slider.src = images[number];
    }
    
    function prev (){
        var slider = document.getElementById("slider");
        number--;

        if(number < 0){
            number = images.length-1;
        }
        slider.src = images[number];
    }

// La variable number contiene la imagen actual. Los clics de botón siguiente y anterior son manejados por sus funciones correspondientes, que cambian la fuente de la imagen a la imagen siguiente / anterior en la matriz.


// --------------------------FORM VALIDATION (PNSUBMIT)------------------------

// HTML5 agrega algunos atributos que permiten la validación de formularios. Por ejemplo, el atributo obligatorio se puede agregar a un campo de entrada para que sea obligatorio completarlo.

// Se puede realizar una validación de formularios más compleja utilizando JavaScript.
// El elemento de formulario tiene un evento onsubmit que se puede manejar para realizar la validación.

// Por ejemplo, creemos un formulario con dos entradas y un botón. El texto en ambos campos debe ser el mismo y no estar en blanco para pasar la validación. (arriba esta la parte HTML.)

// JS:

function validate(){
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");

    if(n1.value != "" && n2.value != ""){
        if (n1.value == n2.value){
            alert("escribiste algo");
            return true;
            
        }

    }
    alert("el valor deberia ser igual y no vacio");
    return false;
}

// Devolvemos verdadero solo cuando los valores no están en blanco y son iguales.

// El formulario no se enviará si su evento onsubmit devuelve falso.
