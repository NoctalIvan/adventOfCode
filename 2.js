const fs = require('fs')

const file = fs.readFileSync('./input/2.txt').toString()
const input = file.split('\n').map(line => line.split(': ').map(a => a.split(' ')))
const lines = input.map(i => ({
    rep: i[0][0].split('-'),
    letter: i[0][1],
    pass: i[1][0]
}))

console.log(lines)

console.log(lines.filter(({pass, rep, letter}) => {
    const score = (pass[rep[0] - 1] == letter ? 1 : 0) + (pass[rep[1] - 1] == letter ? 1 : 0)
    return score == 1
}).length)
