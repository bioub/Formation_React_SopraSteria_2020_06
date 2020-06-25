// function sum(a, b) {
//   let result =  Number(a) + Number(b);

//   for (let i = 2; i < arguments.length; i++) {
//     result += Number(arguments[i]);
//   }

//   return result;
// }


// console.log(sum(1, 2, 3, 4)); // 3

// REST Param : conversion d'une liste de valeur (ici 3, 4) vers un tableau (ici [3, 4])
function sum(a, b, ...nbs) { // const ...nbs = [3, 4];
  let result =  Number(a) + Number(b);

  for (const nb of nbs) {
    result += Number(nb);
  }

  return result;
}


console.log(sum(1, 2, 3, 4)); // 3

// SPREAD Operator : conversion d'un tableau (ici [3, 4]) vers une liste de valeur (ici 3, 4)

const nbs = [3, 4];
// console.log(sum(nbs[0], nbs[1])); // 7
console.log(sum(...nbs)); // 7 // // const a, b = ...nbs;

// De quel côté de l'affectation sont les ...
// à gauche : REST
// à droite : SPREAD

// SPREAD
const cloneNbs = [1, 2, ...nbs, 5, 6]; // [3, 4]

// REST
//    [1 , 2   , 3        , 4, 5, 6  ]
const [un, deux, trois = 3, ...autres] = cloneNbs;
console.log(un, deux, trois); // 1 2 3
console.log(autres); // [4,5,6]

// ES2018 REST/SPREAD Object
const coords = {x: 1, y: 2};

// SPREAD Object
const cloneCoords = {...coords, z: 3};

// Destructurer un objet
//    {x: 1   , y: 2}
const {x: varX} = coords;
console.log(varX);

//    {x: 1   , y: 2}
const { x = 1, y = 2 } = coords;
console.log(x);

// REST Object
const { z, ...coords2d } = cloneCoords;
console.log(z); // 3
console.log(coords2d); // {x: 1, y: 2}
