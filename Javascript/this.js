//要求
// count() // 1
// count() // 2
// count() // 3

// count.reset()

// count() // 1
// count() // 2
// count() // 3

// function counter(){
//     this.num = 0
// }

// let c1 = new counter()
// // counter.prototype.count = () => this.num++
// counter.prototype.count = function(){
//     return ++this.num
// }
// c1.count()
// c1.count()
// console.log(c1.count());
function CounterType()
{
    var counter=1;
    var self=this; // 'self' will now be visible to all

    var incrementCount = function()
    {
        // it doesn't matter that 'this' has changed because 'self' now points to CounterType()
        self.counter++;
    };

}

function SecondaryType()
{
    var myCounter = new CounterType();
    console.log("First Counter : "+myCounter.counter); // 0
    myCounter.incrementCount.apply(this); 
    console.log("Second Counter: "+myCounter.counter); // 1
}
SecondaryType()