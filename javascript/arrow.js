// function declaration
// function Hello(name = '') {
//   return `Hello ${name} !`;
// }

// function expression
// const Hello = function(name = '') {
//   return `Hello ${name} !`;
// };

// arrow function
const Hello = (name = '') => `Hello ${name} !`;

const prenoms = ['Jean', 'Paul'];

prenoms.forEach((name = '') => console.log(`Hello ${name} !`));

class Contact {
  constructor(name = '') {
    this.name = name;
  }
  hello() {
    // setTimeout(function() {
    //   console.log(this); // objet de la classe Timeout (Node.js) ou Window (dans le navigateur)
    //   console.log(`Hello my name is ${this.name}`);
    // }, 1000);

    // portée de closure
    // valeur de this ici
    setTimeout(() => {
      console.log(this); // objet de la classe Contact
      console.log(`Hello my name is ${this.name}`);
    }, 1000);
  }
}

const romain = new Contact('Romain');
romain.hello();