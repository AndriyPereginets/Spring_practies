'use script';

/// filter

const names = ['Andy', 'Sanya', 'Pedro', 'Voldemart'];

const shortNames = names.filter((name) => {
    return name.length < 6;
});

console.log(shortNames);

/// map

const answers = ['IvAn', 'andy', 'ANNA', 'Hell'];

const result = answers.map ((item) => {
    return item.toLowerCase();
});

console.log(result);

/// every/some

const some = [4, 'gfgf', 'tttt'];

console.log(some.every(i => typeof(i) === 'number'));
console.log(some.some(i => typeof(i) === 'number'));

/// reduce

const arr = [4, 5, 3, 1, 2, 6];

const res = arr.reduce((sum, current) => {
    return sum + current;
});

console.log(res);

const arr1 = ['pear', 'banana', 'grape', 'apple'];

const fruit = arr1.reduce((sum, current) => {
    return  `${sum}, ${current}`;
}); 

console.log(fruit);

const obj = {
    Andy: 'person',
    Vasya: 'person',
    Viktor: 'dog',
    Atos: 'dog'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(i => i[0]);

console.log(newArr);