import React from 'react';

// Historiquement, un composant sous forme de fonction
// -> stateless component
// et sous forme de class 
// -> stateful component
// ça n'a plus de sens aujourd'hui avec les hooks
// dites plutôt function(al) component et class component
function Hello({ name = '' }) {
  // Avec le DOM
  // const divEl = document.createElement('div');
  // divEl.className = 'Hello'
  // divEl.innerText =  `Bonjour ${name.toUpperCase()} !`;

  // document.body.appendChild(divEl);

  // return '';

  // Avec React.createElement
  // return React.createElement('div', {className: 'Hello'}, `Bonjour ${name.toUpperCase()} !`)

  return (
    <div className="Hello">
      Bonjour {name.toUpperCase()} !
    </div>
  );
}

export default Hello;

