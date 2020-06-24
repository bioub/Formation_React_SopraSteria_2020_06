const prenoms = ['Jean', 'Paul'];

prenoms
  .map((name) => name.toLocaleUpperCase())
  .forEach((name = '') => console.log(`Hello ${name} !`));
