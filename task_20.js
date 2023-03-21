const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];




function showGoodFilms(arr) {
    return arr.filter(rat => rat.rating >= 8);
}

console.log(showGoodFilms(films));


function showListOfFilms(arr) {
    let a =  arr.map(item => item.name);
    return a.join();
    }

console.log(showListOfFilms(films));


function setFilmsIds(arr) {
    return arr.map((id, i) => {
        id.id = i;
        return id;
    });
}
    


console.log(setFilmsIds(films));

