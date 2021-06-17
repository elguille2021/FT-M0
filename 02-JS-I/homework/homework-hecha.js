// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "HOLA";//null;

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1 //null;

// Crea una variable booleana:
const nuevoBool = true //null;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10-5 === 5 //10 - null === 5; === operador forza a tener ese valor

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10*4 === 40 //10 * null === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1 //null;   21/5 su residuo 1 o resto No el cociente  4.2 redondeado 4


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str //string
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return  x+y                 //(suma)//suma(9,1)// suma  tengo que pasar parametros o ARGUMENTOS 
                              // atributos es en POO enfocado a objetos
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return x-y //  esta devolución faltaría imprimirla con un  console.log(x-y)
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x*y
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x/y
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x===y){return true} else return false  //en js el if va entre () 
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
  //if (str1===str2){return true} else return false // puede dar error  si no se pone else {} 
  // faltaba el .lenght   es length
  if (str1.length===str2.length){return true} else{return false} 
  //---aqui ya estaria bien AUNQUE LO PIDEN O SE PUEDE HACER ASI TAMBIEN
  //return str1.length === str2.length //return str1.lenght===str2.lenght   es length  con th 
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){return true} else {return false} //no olvidar poner el return  y podemos omitir los {} de 
  //el else como deciamos arriba pero es mejor ponerlos por buenas practicas 
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50){return true} else {return false}
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x%y
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  //if(num ===2){return true} else{return false} 
  /*ENTENDIENDO QUE LOS PARES SON LOS NUMS DIVISIBLES ENTRE SI MISMOS Y QUE DAN 0 POR RESIDUO
   SERIA ASI*/
   if(num % 2===0) {return true}else{return false}
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2===1) {return true}else{return false} // Es válido también if(num %2 !==0)--es diferente de 0
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  // return num ^ 2
  return Math.pow(num,2)
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num,3)// el 3 indica elevado 3 veces
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num,exponent)
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num)
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random()
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false    
  /*ENTENDIENDO LOS NUMS POSITIVOS SON MAYORES A 0*/    //las 2  formas que siguen son correctas pero la 2da es mas corta
  //if (numero ===0){return false} else if(num >0){return "el número es positivo"}  else if(numero < 0){return "el número es negativo"}//LOS IF ELSE TAMBIEN VAN ENTRE {} 
 //también pudo ser hecho así
  //if (numero === 0){return false} else if(num > 0){return "es positivo"}  else {return"es negativo"}
  //ya no hizo falta validar con otro  else if pues  si ya el numero no es positivo automatico será número negativo 

  if (numero === 0){
    return false
  }
  else if(numero > 0){
    return "Es positivo"
  }
  else {
    return "Es negativo"
  }
// también se puede expresar así: 
  /*NOTA EL PROBLEMA ES QUE Estaba usando la variable num en vez de número(como pasan así este argumento en la función) por eso no pasaba el test a 27 passed*/
 /* La 2da forma es mas corta porque 
  si ya validamos 1 con validar otra  en automático también sin decirlo validaremos la 3er condición 
  
  if (numero === 0){return false} else if(numero > 0){return "Es positivo"} else {return "Es negativo"} */
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  // Nos piden usar  str no  return ("hello world")+ "" + "!"
  return str + "!"

}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido   //espacio es señalado por un "" no van juntas sino " "  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:                  hasta aquí van 28 
  return 'Hola ' + nombre + '!'   // en el debugger de abajo dice que debe haber un espacio 'Hola ' dejado entre Hola y el + 
// por eso paso hasta que se lo puse porque sino lo que recibía era HolaMartin y esperaba Hola Martin para eso es el '
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4             //ya van hasta aquí 30 , faltan 4 son 34
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
//return base * altura / 2  //o con 
return (base * altura) /2
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.20
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
   if(letra === "a"|| letra === "e" || letra === "i" || letra === "o" || letra === "u" ){return "Es vocal"}   //letra=== e ,tienen que llegvar en cada vocal la variable letra
   if (letra.length > 1){return "Dato incorrecto"}  
    

/* debe escribirse  solo Dato incorrecto  cualquier otro texto como: ,ingresaste mas de una letra o La letra es una vocal 
NO lo valida, el test solo espera esas palabra  en los 2 returns  
Y Si hay que validar a fuerzas todas las vocales */ 

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
