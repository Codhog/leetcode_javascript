let a = {
    car: 'Volvo',
    power: 4
}

// console.log(Object.getOwnPropertyDescriptors(obj));
let b = [] 
console.log(a.constructor === Array); // true 


// console.log(obj.hasOwnProperty('sa'));
 console.log(a.car);
a.car = 'bmw'
console.log(a.car);

var bar = function(){
    return 2
};
var arr = [1,2]
console.log(typeof bar === "function");
console.log(typeof arr === "object");
