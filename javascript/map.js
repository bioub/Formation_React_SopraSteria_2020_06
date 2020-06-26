const prenoms = ['Jean', 'Paul', 'Pierre'];

prenoms
  .filter((name) => name.length === 4)
  .map((name) => name.toLocaleUpperCase())
  .forEach((name = '') => console.log(`Hello ${name} !`));
