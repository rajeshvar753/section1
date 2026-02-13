const user ={
    name: "John",
    email: 'john@example.com',
    age : 30 
}
console.log(user); 
console.log(user.email);
console.log(user['name']);

user.address = 'lucknow';
console.log(user);

user.age =20;
console.log(user);

//delete user.age;
//console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone ={
    brand: 'sumsung',
    model: 'galaxy s25',
    price: 120000,
    color: ['black', 'white', 'blue']
};

console.log(smartphone.color[2]);

