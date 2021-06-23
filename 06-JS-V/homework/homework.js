// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  //class Usuario(opciones) {   this=Usuario
    class Usuario{
    constructor (opciones){  //En Clases no es Costructor con C mayuscula sino minuscula  y en prototipos si es con C mayuscula--si esta pasado como parámetro con mayuscula sino con minuscula o se dependiendo de como esté declarado
    this.usuario=opciones.usuario
    this.nombre=opciones.nombre
    this.email=opciones.email
    this.password=opciones.password  
    }
    saludar(){
      return "Hola, mi nombre es " + this.nombre
    }
    
    
  }
  return Usuario

}
/*Ya no es 

   (objeto)Usuario={
  propiedades: valor
sino de la forma ES6  con class

}*/
/* el this es para no hacer toda esta vaina notar como tuve que poner toda la ruta del objeto en cada uno

class Usuario{
    constructor (opciones){  //En Clases no es Costructor con C mayuscula sino minuscula  y en prototipos si es con C mayuscula--si esta pasado como parámetro con mayuscula sino con minuscula o se dependiendo de como esté declarado
    Usuario.usuario=opciones.usuario
    Usuario.nombre=opciones.nombre
    Usuario.email=opciones.email
    Usuario.password=opciones.password  
    }
    saludar(){
      return "Hola, mi nombre es " + Usuario.opciones.nombre
    }
    
    
  }
  return Usuario
y con THIS ya te lo evitas porque en todos los renglones hara referencia a la ruta y propiedades de el objeto Usuario

*/
function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function(){
    return "Hello World!"
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  //NOTA AL INVESTIGAR el reverse pasa el string al array es lo opuesto a join (que pasa un arreglo a string)
  String.prototype.reverse = function (){ return this.split("").reverse().join(""); }
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, dir/*Escribir los argumentos que recibe el constructor*/) {
      // Crea el constructor:
      // this.nombre=nombre; this.apellido=apellido; this.edad=edad; this.dir=dir; } detalle(){ return "Nombre: "+ this.nombre, "Apellido: "+this.apellido, "Edad: "+this.edad, "Domicilio: "+this.dir }
       this.nombre=nombre; this.apellido=apellido; this.edad=edad; this.dir=dir; } 
       detalle(){ 
         return 
         "Nombre: "+ this.nombre, "Apellido: "+this.apellido, "Edad: "+this.edad, "Domicilio: "+this.dir }
    
}

function crearInstanciaPersona(nombre, apellido, edad, dir) { //VA LIGADO CON EL CONSTRUCTOR DE ARRIBLA DE LA CLASE Persona
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
memo= new Persona('Juan', 'Perez', 23, 'Saavedra123')
return memo

}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function(){return this.nombre + ", " + this.edad + " años" }  //This=persona Ej this.nombre
}  // el espacio en + "  años" era importante si no dijera 22años y debe ser 22 años  
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
