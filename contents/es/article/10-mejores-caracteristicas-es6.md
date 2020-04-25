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

ECMAScript 2015 o más conocido como ES6 o ES2015 lanzado en Junio de 2015. ES5 fue lanzado en Diciembre de 2009. Entonces tomaría alrededor de 6 años para la siguiente versión de ECMAScript para ser lanzado. Entonces, hay muchas características interesantes en ES6.


Acá está una lista con el Top 10 de mejores características de ES6 para los desarrolladores de javacript "ocupados" (en ningún orden particular):

1. Parámetros por defecto
2. Template Literals
3. Cadenas Multi-líneas
4. Asignación de destructuración
5. Literals de objetos mejorados
6. Funciones flecha
7. Promesas
8. Let y Const
9. Clases
10. Módulos
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

Lost literales de objetos facilitan la creación rápida de objetos con propiedades dentro de sus llaves, veamos:

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


### 7. Promesas

Las promesas son utilizadas para ejecuciones asíncronas. En ES6, podemos usar promesas con funciones flecha

```javascript
var asyncCall =  new Promise((resolve, reject) => {
   // do something async 
   resolve();
}).then(()=> {   
   console.log('Yay!');
})
```

*Para más información, [click aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*
