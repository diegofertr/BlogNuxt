---
name: '10-mejores-caracteristicas-es6'
title: 10 mejores características de ES6
year: Dic 15, 2019
color: '#8e7964'
category: 'article'
technology: javascript
trans: '10-best-es6-features'
id: 'es6-best-features'
cardAlt: 'Imagen de 10 mejores características de ES6'
description: |
  Acá está, según mi criterio, una lista de las 10 mejores características que se introdujeron en es6, el nuevo estándar de javascript.
---

## ¿Qué es ECMAScript2015 o ES6?

ECMAScript 2015 o más conocido como ES6 o ES2015 lanzado en Junio de 2015. En contraposición ES5 fue lanzado en Diciembre de 2009, entonces, hay muchas características nuevas e interesantes en ES6.


Acá está una lista con el Top 10 de mejores características de ES6 para que los desarrolladores en javacript puedan escribir un código más legible y entendible (en ningún orden particular):

1. Parámetros por defecto
2. Template Literals
3. Cadenas Multi-líneas
4. Asignación de destructuración
5. Literals de objetos mejorados
6. Funciones flecha
7. Let y Const
8. Map y Filter
9. Módulos
10. Clases
11. For of (bonus)

Lo que más me atrae de Nuxt es la filosofía *serverless* (aunque Nuxt también puede ser SSR) y el prerendering estático que proporciona a aplicaciones SPA. Resumidamente, con ello se puede combinar lo mejor de una web estática: HTML compilado, lo que conlleva mejor SEO, y lo mejor de una *single page application*: Webpack, optimizaciones de caché, lazy-loading, funciones y datos asíncronos...

### 1. Parámetros por defecto

En ES6, podemos definir los valores por defecto de las variables de entrada en una función, para así, poder prevenir posibles errores de datos erróneos por ejemplo.

```javascript
var calculateArea = function (height = 50, width = 20) {
  // write logic
  ...
}
```

Mientras que en ES5, teníamos que hacer uso del operador lógico OR <inline-code>||</inline-code>

```javascript
var calculateArea = function (height, width) {
  _height = height || 50;
  _width = width || 20;
  // write logic
  ...
}
```

### 2. Template Literals

En ES6, podemos usar una nueva sintaxis <inline-code>${PARAMETRO}</inline-code> dentro de las comillas invertidas <inline-code>`</inline-code>.

```javascript
var fullName = `Your fullName is ${firstName} ${lastName}.`
```

En ES5, tendríamos que construir el string de la forma clásica

```javascript
var fullName = 'Your fullName is ' + firstName + ' ' + lastName + '.';
```

### 3. Cadenas Multi-líneas

En ES6, es muy simple definir una cadena en varias líneas:

```javascript
let loremData = `Ipsum nostrud ea exercitation,
                 laboris proident cillum, Est 
                 voluptate labore irure sint..
                 Tempor minim proident elit 
                 excepteur sint aliqua esse est sit.`
```

En ES5, para lograr esto teníamos que usar la siguiente forma:

```javascript
let loremData = 'Ipsum nostrud ea exercitation,\n'
              + 'laboris proident cillum, Est \n'
              + 'voluptate labore irure sint..\n'
              + 'Tempor minim proident elit \n'
              + 'excepteur sint aliqua esse est sit.\n'
```

### 4. Asignación por destructuración

La sintaxis de asignación por destructuración es una expresion de Javascript que hace posible deshacer los valores de arrays, o propiedades de objetos en diferentes variables.

```javascript
var o = { p: 42, 1: true };
var { p, q } = o;

console.log(p);// 42
console.log(q);// true
```

### 5. Mejorado en la declaración de objetos

Los literales de objetos facilitan la creación rápida de objetos con propiedades dentro de sus llaves, veamos:

```javascript
function getLaptop(make, model, year) {
   return {
      make,
      model,
      year
   }
}

getLaptop("Apple", "MacBook", "2015");
```

*Para más información, [click aquí](https://dev.to/sarah_chima/enhanced-object-literals-in-es6-a9d)*


### 6. Funciones flecha

(Mi parte favorita) Las flechas harán que una función se comporte de una manera correcta, es decir que se tendrá el mismo valor que en el contexto de la función, no mutará:

```javascript
$('.btn').click((event) => {
   this.doSomething()
});
```

*Para más información, [click aquí](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)*


### 7. Let y Const

A partir de ES6 se tiene por convencion declarar las variables con `let` y `const` y se da como mala práctica el uso de `var`, veamos la diferencia de ambos:

```javascript
let nombre = 'Juan';
const ci = '2555555';


console.log(nombre);//Juan
nombre = 'Pedro';
console.log(nombre);//Pedro

ci = 123456;//Uncaught TypeError: Assignment to constant variable.
```

Entonces en resumen, las variables definidas con `let` pueden cambiar a lo largo de nuestro código, mientras que mediante `const` las variables no tienen permitido cambiar su valor y por tanto nos muestra el error.

*Para más información, [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) y [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)*



### 8. Map y Filter

Map es una función de ES6 específica para `arrays`, que nos permite recorrer un determinado array y nos devuelve como resultado otro array del mismo tamaño del original pero con contenido diferente según sea el caso.


```js

let lista1 = [1, 2, 3, 4, 5];

const lista2 = lista1.map(item => {
   return item*2;
});

console.log(lista2);//[2, 4, 6, 8, 10]
```


*Para más información, [click aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)*


-------------------

Filter es otra función de ES6 específica para `arrays`, a diferencia de Map, este método crea otro array a partir de una determinada condición aplicada al array original.



```js

let lista1 = [1, 2, 3, 4, 5];

const lista2 = lista1.filter(item => item % 2 === 0);

console.log(lista2);//[2, 4]
```



### 9. Módulos

ES6 viene con la funcionalidad de módulos, que nos permite importar/exportar objetos, funciones y clases desde código.

```js
//lib/utils.js
module "utils" {
   export function greeting (name) {
      console.log(`Hi ${name}`);
   }
}
```

Y para importar la función desde otro archivo JS:

```js
// app.js

import { greeting } from 'utils '

```



### 10. Clases

ES6 introduce clases de Javascript que se basa en la herencia de prototipos, esta nueva sintaxis hace que sea mas sencillo crear objetos, aprovechar la herencia de prototipos y reutilizar el código.

```js
class Auto {
   constructor(marca, color) {
      this.marca = marca;
      this.color = color;
   }
}
```



### 11. For of (bonus)

En ES6 se incluye un nuevo tipo de bucle, este nos permite iterar a través de los elementos de objetos iterables como por ejm: String, Array, Set, Map, etc.

```js
const lista = [1, 2, 3, 4, 5]
for (let value of lista) {
   console.log(value);
}

const nombre = 'Fernando'
for (let letra of nombre) {
   console.log(letra);
}
```