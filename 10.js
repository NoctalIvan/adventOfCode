const fs = require('fs')

const file = fs.readFileSync('./input/10.txt').toString()
const lines = file.split('\n').map(p => +p).sort((a, b) => a - b)

const cache = {}

const countArrangements = (adapters) => {
    if(adapters.length === 0) {
        return 1
    }

    const cached = cache[adapters.join('-')]
    if(cached) {
        return cached
    }
    
    // try next 3
    let poss = 0
    if(adapters[2] <= 3) {
        poss += countArrangements(adapters.slice(3).map(a => a - adapters[2]))
    }

    if(adapters[1] <= 3) {
        poss += countArrangements(adapters.slice(2).map(a => a - adapters[1]))
    }

    poss += countArrangements(adapters.slice(1).map(a => a - adapters[0]))

    cache[adapters.join('-')] = poss
    return poss
}

console.log(countArrangements(lines))