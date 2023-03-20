'use strict';

console.log('Запит даних...');

const req = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Підготовка даних...');
    
        const product = {
            name: 'TV',
            price: 1200
        };
    
        resolve(product);
        
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    }).then((data) => {
        data.modify = true;
        return data;
        
    }).then((data) => {
        console.log(data);
    });
}).catch(() => {
    console.error('Помилка');
}).finally(() => {
    console.log('THE END');
});

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('first');
});

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

test(1000).then(()=> console.log('1000 ms'));
test(2000).then(()=> console.log('2000 ms'));


