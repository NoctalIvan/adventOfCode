const fs = require('fs')

const file = fs.readFileSync('./input/7.txt').toString()
const ruleStrings = file.split('\n')

const rules = {}
ruleStrings.forEach(ruleString => {
    console.log(ruleString)
    const wrapper = ruleString.split(' bags contain ')[0]
    const wrapped = ruleString.split('contain ')[1]
        .split(', ').map(a => a.replace(/\./g, '').replace(/bags?/g, '').replace(/\s$/, ''))

    const wrappedObject = {}
    if(wrapped.length > 1 || wrapped[0].match(/^\d/)) {
        wrapped.forEach(w => {
            wrappedObject[w.split(' ').slice(1).join(' ')] = +w.split(' ')[0]
        })
    }

    rules[wrapper] = wrappedObject
})

const canContain = (bag, target) => {
    if(bag == target) return true

    if(!rules[bag]) return false

    for(col of Object.keys(rules[bag])) {
        if(canContain(col, target)) {
            return true
        }
    }

    return false
}

console.log(rules)


let toCount = ['shiny gold']
let counted = []
while(toCount.length > 0) {
    const bag = toCount[0]
    const newBags = rules[bag]
    Object.entries(newBags).forEach(([b, c]) => {
        for(let i = 0; i < c; i ++) {
            toCount.push(b)
        }
    })

    counted.push(bag)
    toCount = toCount.slice(1)
}

console.log(counted)
console.log(counted.length - 1)