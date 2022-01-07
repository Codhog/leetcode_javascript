
// function person(name,qq){

//     this.name = name;

//     this.qq = qq;

// }

// person.prototype.showname = function(){//这里showname即使方法的引用也是方法名，有点奇怪
//     console.log("我的名字:"+this.name)

// }     

// var p1 = new person("张三",11111);

// var p2 = new person("李四",22222);



// p1.showname();

// function model(state, input){
//     Object.defineProperty(input, 'value', {
//       get: ()=> state.value,
//       set: (value) => state.value = value 
//     })
//   }
  
  
//   const input = { input : Math.random()}
//   const state = { value: 'asd' }
//   model(state, input)
  
//   function model(state, input){
//     Object.defineProperty(input, 'value', {
//       get: ()=> state.value,
//       set: (value) => {
//           console.log(value);
//       }
//     })
//   }
  
  
  
//   console.log(state.value) // 'BFE'

class Person{
    constructor(first, last){
        this.name = first + ' ' +last
    }
    get fullname(){
        return this.name
    }
}

let p1 = new Person('Peter', 'Chen')

p1.color = 'red'

console.log(p1.color);