const smartphone =[
    {
    brand : 'nothing',
    model: 'phone 2',
    price: 50000,
    color: ['black', 'white', 'blue']   
},
    {
    brand : 'oneplus',
    model: '13R',
    price: 40000,
    color: ['black', 'white', 'blue']   
},
    {
    brand : 'vivo',
    model: 't2 pro',
    price: 25000,
    color: ['silver', 'blue']   
},
    {
    brand : 'sumsung',
    model: 'J7',
    price: 12000,
    color: ['black', 'gold']   
},
] ;

const price = smartphone.map( (phone) => {
    return phone.price;
});

console.log(price);

const brand = smartphone.map( (phone) => {
    return phone.brand;
});

console.log(brand);

const model = smartphone.map( (phone) => {
    return phone.model;
});

console.log(model);

const color = smartphone.map( (phone) => {
    return phone.color;
});

console.log(color); 

const budget = smartphone.filter((phone) => {
    return phone.price < 30000;
});

console.log(budget);

const blackphones = smartphone.filter((phone) => {
    return phone.color.includes('black');
});

console.log(blackphones);

//console.log( Array.isArray(smartphone));

console.log(typeof NaN);
console.log( undefined +1);

console.log(1 == '1');
console.log( 1 === '1');
console.log( 1 === 1);

console.log(1 + '1');
console.log(1 + '1'+1);
console.log(1 + 1 + '1');
console.log(1 + 1 +'abc');



  


