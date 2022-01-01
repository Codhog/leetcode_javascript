function counter(){
    this.num = 1
}



const c1 = new counter()

counter.prototype = {
    'add': ()=>++this.num
}


console.log(c1.add);
console.log(counter.prototype);
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