// debounce
const debounce = (func, wait = 50 )=>{
    let timer = 0
    return function(...args){
        if(timer)clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this, args)
        })
    }
}

// throttle
const throttle = (func, wait = 50000) => {
    // 上一次执行该函数的时间
    let lastTime = 0
    console.log(wait);
    return function(...args){
        // 当前时间
        let now = new Date()
        // 如果差值大于设置的等待时间就执行函数
        if(now - lastTime > wait){
            lastTime = now
            func.apply(this, args)
        }
    }
}

setInterval(throttle(()=>console.log(1), 500), 1)