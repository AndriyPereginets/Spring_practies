'use strict';

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(console.log('promise'));

    queueMicrotask(() => console.log('wow'));

Promise.resolve()
    .then(console.log('promise_2'));


    console.log('LOL');

// () => {}
// microtask: then, catch, finally, await;
// render
// () => {}
// microtask: then, catch, finally, await;
// render
