# Typescript
TypeScript is a statically typed, object-oriented, and multi-paradigm language that builds on JavaScript by adding optional type annotations and class-based object-oriented programming. It was developed and maintained by Microsoft and has been gaining popularity among developers for its ability to catch errors and provide better maintainability for large-scale projects. Here are some of the key features of TypeScript with examples:

1. Types: TypeScript adds optional type annotations to JavaScript, making it easier to catch errors during development. For example, you can declare a variable with a specific type, such as:

```js

let name: string = "Hadiul Islam";

```

2. Interfaces: Interfaces are a way to define a contract for objects to follow in TypeScript. For example, you can define an interface for a person as follows:

```js
interface Person {
  name: string;
  age: number;
}
```

3. Classes: TypeScript introduces the concept of classes, which allows for object-oriented programming in JavaScript. For example, you can define a class for a person as follows:

```js
class Person {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

```


4. Generics: Generics allow you to write reusable code that can work with any type. For example, you can define a generic function that takes an array of any type and returns the same array in reverse:

```js

function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

```


5. Decorators: Decorators are a way to add additional behavior to classes, methods, and properties. For example, you can use the @log decorator to log a message whenever a method is called:


```js
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`${propertyKey} method was called`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}


```


6. Namespaces: Namespaces allow you to organize your code into logical groups and avoid naming collisions. For example, you can define a namespace for your utility functions:

```js

namespace Utils {
  export function logMessage(message: string) {
    console.log(message);
  }
}

```

These are just a few of the features of TypeScript, and there are many more that make it a powerful tool for building large-scale and maintainable applications.