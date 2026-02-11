const myArr = [1, 'hello', true, null];
console.log(myArr);
const movies = ['Inception', 'Interstellar', 'The Dark Knight', 'Memento', 'Dunkirk', 'Tenet'];

console.log(movies.length);

//indexing
console.log(movies[0]);
console.log(movies.indexOf('Memento'));
console.log(movies.at(-1));
console.log(movies.at(1));

movies[2] = 'odyssey';

console.log(movies);

//slicing
console.log(movies.slice(1, 4));
console.log(movies.slice(1));
console.log(movies.slice(-3));

//adding and removing elements

movies.push('RRR');
movies.unshift('The Prestige');
console.log(movies);

movies.pop();
movies.shift();
console.log(movies);

//splice function 
 // movies.splice(3, 2); //removing elements
// movies.splice(3, 0, 'superman', 'supergirl'); //replacinng elements

movies.splice(3, 0, 'superman', 'supergirl'); //inserting elements 

console.log(movies);