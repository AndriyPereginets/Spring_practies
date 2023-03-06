'use strict';

const persone = {
    name: 'Andy',
    contact: '+3807842098',
    parents: {
        mom: 'Balal',
        dad: 'Bogdan'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Diva';

console.log(persone);
console.log(clone);

/* console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone))); */