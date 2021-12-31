let multiply = function(a,b,c){
    console.log(`a: ${a}, `,b,c);
}


function curry(func) {
    return function curried(...args) {
      // 1. if enough args, call func 
      // 2. if not enough, bind the args and wait for new one
    // console.log(args, func);
      if (args.length === func.length) {
        return func.apply(this, args)
      } else {
        console.log(args);
        return curried.bind(this, ...args)
      }
    }
  }

  const curriedmultiply = curry(multiply)

  console.log(  curriedmultiply(2,3,4,5));