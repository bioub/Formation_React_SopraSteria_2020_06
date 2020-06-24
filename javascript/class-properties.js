// Stage 3 TC39
class Contact {
  #name = 'Romain';
  hello() {
    console.log(`Hello my name is ${this.#name}`);
  }
}

const romain = new Contact();
// SyntaxError: Private field '#name' must be declared in an enclosing class
// console.log(romain.#name);

romain.hello();