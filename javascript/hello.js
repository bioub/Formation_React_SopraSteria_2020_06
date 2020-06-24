function Hello({ name = ''}) {
  return `Hello ${name} !`;
}

console.log(Hello({
  name: 'Romain'
}));

const user = {
  name: '',
  city: 'Paris',
};

const name = user.name ?? ''; // ES2020 (Nullish Coallescing Operator)
const city = user.city ?? '';

// Object destructuring (ES2015)
const { name = '', city = '' } = user;

// Nouveautés depuis 2016 en JavaScript (ECMAScript)
// https://github.com/tc39/proposals/blob/master/finished-proposals.md

