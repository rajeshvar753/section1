const nums = [3, 5, 8, 9, 12, 18];

for(let n of nums){
    console.log(n*2);
}

nums.forEach( (a) =>{
     console.log(a)

    } );

    nums.forEach( (a, i, arr) =>{
        console.log(a, i, arr);
    } );

    //map function
    const newarray = nums.map( (n) => {
        return n*3+1;
    });

    console.log(newarray);

    const nums2 =[2, 5, 6, 7, 9];
    const newarray2 = nums2.map( (n) => {
        return n**2;
    });    

    console.log(newarray2);

    //filter function
    const even = nums.filter( (n) => {
        return n % 2 === 0;

    });
    console.log(even);

    const prices =[ 345.95, 34.32, 874.5, 23.45, 56.78];
     
    const expensive =prices.map((n) => {
        return n+n*0.18;
    });
    console.log(expensive);

    //filter all prices between 40 and 200

    const midrange = prices.filter( (n) => {
        return n > 40 && n < 200;
    });
    console.log(midrange);