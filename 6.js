const fs = require('fs')
const { isRegExp } = require('util')

const file = fs.readFileSync('./input/6.txt').toString()
const groups = file.split('\n\n').map(a => a.split('\n').map(b => b.split('')))

const getGroupLetters = (group) => {
    const letters = {}
    for(person of group) {
        for(letter of person) {
            letters[letter] = (letters[letter] || 0) + 1
        }
    }

    return Object.keys(letters).filter(l => letters[l] == group.length)
}

const groupsLetters = groups.map(getGroupLetters)
const count = groupsLetters.reduce((acc, a) => acc + a.length, 0)
console.log(count)