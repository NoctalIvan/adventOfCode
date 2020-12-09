const fs = require('fs')

const file = fs.readFileSync('./input/5.txt').toString()
const lines = file.split('\n').map(p => +p)

const preambleLength = 25

for(let i = preambleLength; i < lines.length; i ++) {
    const nbr = lines[i]
    const preamble = lines.slice(i-preambleLength, i)
    const isValid = preamble.find((a, ai) => preamble.find((b, bi) => a + b === nbr && ai !== bi))

    if(!isValid) {
        console.log({nbr, i, preamble})
        
        for(let j = 0; j < lines.length; j ++) {
            let sum = 0
            let k = j
            while(sum < nbr) {
                sum += lines[k]
                k ++
            }

            k --

            if(sum == nbr) {
                const range = lines.slice(j, k+1)
                console.log({j, jval: lines[j], k, kval: lines[k], sum, range, min: Math.min(...range), max: Math.max(...range), res: Math.min(...range) + Math.max(...range)})
                process.exit(0)
            }
        }
    }
}