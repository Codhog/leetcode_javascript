
var MyQueue = function() {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue[0]
}
// var obj = new MyQueue()
// obj.push(x)
// var param_2 = obj.pop()
// var param_3 = obj.peek()
// var param_4 = obj.empty()

var obj = new MyQueue()
console.log('before', obj.peek());
obj.empty()
// console.log(obj.empty())