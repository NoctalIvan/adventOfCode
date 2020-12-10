const fs = require('fs')

const file = fs.readFileSync('./input/5.txt').toString()
const passes = file.split('\n')

const split = (range, c) => {
    const halfgap = (range[1] - 1 - range[0]) / 2
    if(c == 'F' || c == 'L') {
        return [range[0], range[0] + halfgap]
    } else {
        return [range[1] - halfgap, range[1]]
    }
}

const getSeat = (code) => {
    let rowRange = [0, 127]
    code.split('').slice(0,7).forEach(c => {
        rowRange = split(rowRange, c)
    })

    let colRange = [0, 7]
    code.split('').slice(7).forEach(c => {
        colRange = split(colRange, c)
    })

    return {
        row: rowRange[0],
        col: colRange[0],
        id: rowRange[0] * 8 + colRange[0]
    }
}

const seats = passes.map(getSeat)
console.log(seats.sort((a, b) => b.id - a.id).map(a => a.id))

for(let i = 0; i < seats.length - 1; i ++) {
    if(seats[i].id == seats[i+1].id + 2) {
        console.log(seats[i], seats[i+1])
        break
    }
}