function addNums(a, b){
   var c= a+b;
    console.log(c);
}

addNums(5, 10);

addNums(20, 30);

addNums(100, 200);

// console.log(c);

const calcAvg = function(m1, m2, m3){
  const  avg = (m1+m2+m3)/3;
 // console.log(avg);

 return avg;

}
const avg = calcAvg(80, 90, 100);

console.log(avg);


//arrow function
const checkEven = (num) =>{
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

const iseven = checkEven(10);

console.log(iseven);