---
name: '10-best-es6-features'
title: 10 top best features of ecmascript6
year: 15 Dec 2019
color: '#8e7964'
trans: '10-mejores-caracteristicas-es6'
id: 'es6-best-features'
description: |
  Here is in my opinion a list of the 10 best features that were introduced in es6 the new javascript standard.
---

## What is ECMAScript2015 or ES6?

ECMAScript 2015 commonly known as ES6 or ES2015 released on June 2015. ES5 was released on December 2009. It would then take almost six years for the next version of ECMAScript to be released. So, there are many exciting feature in ES6.

Here’s the list of the top 10 best ES6 features for a busy javascript developer(in no particular order):

1. Default Parameters in ES6
2. Template Literals in ES6
3. Multi-line Strings in ES6
4. Destructuring Assignment in ES6
5. Enhanced Object Literals in ES6
6. Arrow Functions in ES6
7. Promises in ES6
8. Block-Scoped Constructs Let and Const
9. Classes in ES6
10. Modules in ES6
11. For of (bonus)


### 1. Default Parameters in ES6

In ES6, we can put the default values right in the signature of the functions.

```javascript
var calculateArea = function (height = 50, width = 20) {
  // write logic
  ...
}
```

In ES5, we were using logic OR operator.<inline-code>||</inline-code>

```javascript
var calculateArea = function (height, width) {
  _height = height || 50;
  _width = width || 20;
  // write logic
  ...
}
```

### 2. Template Literals

 In ES6, we can use a new syntax <inline-code>${PARAMETER}</inline-code> inside of the back-ticked string. <inline-code>`</inline-code>.

```javascript
var fullName = `Your fullName is ${firstName} ${lastName}.`
```

In ES5, we have to break string like below.

```javascript
var fullName = 'Your fullName is ' + firstName + ' ' + lastName + '.';
```

### 3. Multi-line Strings in ES6

In ES6, it is very simple. Just use back-ticks.

```javascript
let loremData = `Ipsum nostrud ea exercitation,
                 laboris proident cillum, Est 
                 voluptate labore irure sint..
                 Tempor minim proident elit 
                 excepteur sint aliqua esse est sit.`
```

In ES5, we had to use below approach.

```javascript
let loremData = 'Ipsum nostrud ea exercitation,\n'
              + 'laboris proident cillum, Est \n'
              + 'voluptate labore irure sint..\n'
              + 'Tempor minim proident elit \n'
              + 'excepteur sint aliqua esse est sit.\n'
```

### 4. Destructuring Assignment in ES6

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variable.

```javascript
var o = { p: 42, 1: true };
var { p, q } = o;

console.log(p);// 42
console.log(q);// true
```

### 5. Enhanced Object Literals in ES6

Object literals make it easy to quickly create objects with properties inside the curly braces.

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
*For more info, [click here](https://dev.to/sarah_chima/enhanced-object-literals-in-es6-a9d)*

### 6. Arrow Functions in ES6

The fat arrows are amazing because they would make your this behave properly, i.e., this will have the same value as in the context of the function— it won’t mutate.

```javascript
$('.btn').click((event) => {   
   this.doSomething() 
});
```

*For more info, [click here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)*

### 7. Promises in ES6

Promises are used for asynchronous execution. In ES6, we can use promise with arrow function shown below.

```javascript
var asyncCall =  new Promise((resolve, reject) => {
   // do something async 
   resolve();
}).then(()=> {   
   console.log('Yay!');
})
```

*For more info, [click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*