// nouveauté ES2015 mot clé class
// class Contact {
//   constructor(name = '') {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }

// fonction constructeur
function Contact(name = "") {
  // la création ou de méthode est dynamique
  // if (name.length >= 3) {
    this._name = name;
  // }
  this.hello = function () {
    console.log(`Hello (object) my name is ${this.name}`);
  };
}

Contact.prototype.hello = function () {
  console.log(`Hello (prototype) my name is ${this.name}`);
};

const romain = new Contact('Romain');
console.log(romain._name); // Romain
romain.hello(); // Hello (object) my name is Romain