const fs = require('fs')

const file = fs.readFileSync('./input/3.txt').toString()
const input = file.split('\n')
console.log(input)
const width = input[0].length
const height = input.length

const getNext = ({x, y, dx, dy}) => {
    const newX = (x + dx) % width
    const newY = (y + dy)
    if(newY >= height) {
        return null
    }

    return {x: newX, y: newY, tile: input[newY][newX]}
}

let x = 0
let y = 0
let cpt = (input[0][0] == '#' ? 1 : 0)
do {
    const res = getNext({x, y, dx: 1, dy: 2})
    console.log(res)
    if(!res) break
    cpt += (res.tile == '#' ? 1 : 0)
    x = res.x
    y = res.y
} while(true)

console.log(cpt)

console.log(198 * 84 * 72 * 81 * 53)