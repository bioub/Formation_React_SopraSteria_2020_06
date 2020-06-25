const coords = {x: 1, y: 2};

// 2 syntaxe pour accéder à l'objet
console.log(coords.x); // 1
console.log(coords['x']); // 1

// les crochets sont plus dynamiques
const cle = 'x';
console.log(coords[cle]); // 1

// Pour ajouter une clé (étendre un objet)
// coords.z = 3;
// coords['z'] = 3;

// en dynamique
const keyZ = 'z';
coords[keyZ] = 3;

const coords3d = {
  x: 1,
  y: 2,
  [keyZ]: 3,
};

const names = ['Romain', 'Jean', 'Eric'];
let i = 0;

const users = {
  [`user${++i}`]: names[i-1],
  [`user${++i}`]: names[i-1],
  [`user${++i}`]: names[i-1],
};

// const users = {
//   user1: 'Romain',
//   user2: 'Jean',
//   user3: 'Eric',
// };

console.log(users);