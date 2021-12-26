var calculate = function(s) {
    s.replace(' ','')
    let n = null
    let arr = []
    // Only  +  and  _  go into signArr
    // let sign = ''
    for(let i=0;i<s.length;i++){
        // if there isn't previous sign saved.
        if(/\d/.test(s[i])){
            if(!n===null){
                n = n * 10 + parseInt(s[i])
            }
            else{
                n = parseInt(s[i])
            }    
            
        }
        else{
            if(!n===null)arr.push(n)
            switch(s[i]){   
                case '+':
                    arr.push(parseInt(n))
                    break;
                case '-':
                    arr.push(parseInt(-n))
                    break;
                case '*':
                    arr.push(arr.pop() * n)
                    break;
                case '/':
                    arr.push((arr.pop()/n)<<0)
                    break;
                }
            n=null
        }
        
        
        console.log(`n: ${n}, arr: ${arr}`);
    }
    return arr.reduce((a,b)=>a+b)
};

console.log(calculate("3+2+2"));