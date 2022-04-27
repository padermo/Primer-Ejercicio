
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5; 
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log("valor de x linea 18 "+x); // 10
  console.log("valor de a linea 19 "+a); // 8
  var f = function(a, b, c) {
    b = a; // asignamos el valor de a en b 8
    console.log("valor de b linea 22 "+b); // 8
    b = c; // asignamos el valor de c en b que es 10
    var x = 5;
  }
  f(a,b,c);
  console.log("valor de b linea 27 "+b); // 9, ya que imprime dentro de la funcion c y no dentro de la funcion f
}
c(8,9,10); // asignamos los valor a los parametros a, b, c
console.log("valor de b linea 30 "+b); // 10
console.log("valor de x linea 31 "+x); // 1
```

```javascript
console.log(bar); //undefined
console.log(baz); //error porque no es una variable definida en algun tipo
foo(); 
function foo() { console.log('Hola!'); } //Hola!
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco, ya que en el bloque if estoy redeclarando en valor de instructor
```

```javascript
var instructor = "Tony";
(function() { //esto es una funcion auto-invocada (IIFE - immediately invoked function expression)
   if(true) {
      var instructor = "Franco";
      console.log("linea 57 "+instructor); //franco
   }
})();
console.log("linea 60 "+instructor); //tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //the flash
    console.log(pm); //reverse flash
}
console.log(instructor); //the flash
console.log(pm); //franco, porque la variable pm que esta dentro del bloque if, solo se ejecuta dentro de ese bloque, por lo tanto al imprimir fuera, toma como referencia la variable global let pm="franco";
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 //2
"4px" - 2 //nan
7 / 0 //nan
{}[0] //[0]
parseInt("09") //09 number
5 && 2 //2 al ser ambos verdaderos, devuelve el segundo valor
2 && 5 //5 al ser ambos verdaderos, devuelve el segundo valor
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] //concatena [3]+[3]=33 y resta [10] dando resultado 23
3>2>1 //false
//!: Devuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true.
//Operador lógico NO(!): es negación. Cada vez que colocamos este operador cerca de alguna condición, cambia su valor de verdadero a falso o de lo contrario de falso a verdadero.
[] == ![] //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefined porque al subir la variable a, no sube la asignacion, queda var a;
   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);//no ejecuta nada ya que estoy diciendo que el if es falso por ende no entra al bloque
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//aurelio de rosa

var test = obj.prop.getFullname;

console.log(test());//undefined porque estoy guardando solo la funcion getFullname y cuando la llame al global, no existe una propiedad this.fullname
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);//1
   setTimeout(function() { console.log(2); }, 1000); // despues de 1 segundo imprime 2
   setTimeout(function() { console.log(3); }, 0); // 3
   console.log(4); // 4
}

printing();
```
