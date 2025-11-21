
let a = '123';
console.log( typeof Number(a));
const num = [1,3,45,2,3];
for (let indexNum = 0; indexNum<num.length; indexNum++) {
    console.log(num[indexNum])

};
num.forEach(function(three){console.log(three)});

let newnum = num.map(function(three){
    console.log(three);
    return three+2

} );

console.log(newnum)
console.log(num)