import fs  from 'fs';

// 'use strict';
// const fs = createRequire('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(n, prices, k) {
    // Write your code here
    prices.sort(function(a, b) {
        return a - b;
})
    let sum=0
    let num=0
    while(sum<=k){
        for(let i=0;i<prices.length;i++){
             
            sum+=prices[i]
            console.log('what', sum, prices[i])
        }
        num++
    }
    return num
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const prices = readLine().replace(/\s+$/g, '').split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

    const result = maximumToys(n, prices, k);

    ws.write(result + '\n');

    ws.end();
}