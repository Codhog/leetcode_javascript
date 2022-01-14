Array.prototype.myMap = function(callback, thisArg) {
    const length = this.length
    const result = new Array(length)
    console.log(this);
    for (let i = 0; i < length; i++) {
      if (i in this) {
        result[i] = callback.call(thisArg, this[i], i, this)
      }
    }
  
    return result
  }

let att = [4,5,2,3]
att.myMap((x)=>x+5)