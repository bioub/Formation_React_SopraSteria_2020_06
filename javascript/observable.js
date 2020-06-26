// setTimeout(() => console.log('1s'), 1000);

// function timeout(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), delay);
//   });
// }

// timeout(1000).then(() => console.log("1s"));

const { Observable } = require('rxjs')

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => observer.next(), delay);
  });
}

// Asynchronous iterator

interval(1000).subscribe(() => console.log("1s"));
