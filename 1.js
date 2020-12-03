const fs = require('fs')

const file = fs.readFileSync('./input/1.txt').toString()
const input = file.split(/\s+/).map(a => +a)


for(let i = 0; i < input.length; i ++) {
    for(let j = i+1; j < input.length; j ++) {
        for(let k = j+1; k < input.length; k ++) {
        if(input[i] + input[j] + input[k] == 2020) {
            console.log(input[i] * input[j] * input[k])
        }}
    }
}