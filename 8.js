const fs = require('fs')

const file = fs.readFileSync('./input/8.txt').toString()
const code = file.split('\n').map(l => ({instr: l.split(' ')[0], param: +l.split(' ')[1]}))

let changeLine = -1

while(true) {
    changeLine ++
    console.log(changeLine)

    let cursor = 0
    const visitedLines = []
    let acc = 0

    // change one instruction
    const changedCode = JSON.parse(JSON.stringify(code))
    if(code[changeLine].instr == 'acc') {
        continue
    }

    if(code[changeLine].instr == 'jmp') {
        changedCode[changeLine].instr = 'nop'
    } else if(code[changeLine].instr == 'nop') {
        changedCode[changeLine].instr = 'jmp'
    }

    while(true) {
        if(cursor == changedCode.length) {
            // win
            console.log({acc})
            process.exit(0)
        }
    
        const line = changedCode[cursor]
        if(visitedLines.includes(cursor)) {
            // lose
            break
        }
    
        visitedLines.push(cursor)
    
        if(line.instr === 'acc') {
            acc += line.param
        }
    
        if(line.instr === 'jmp') {
            cursor += line.param
        } else {
            cursor ++
        }
    }
}