const fs = require('fs')

const file = fs.readFileSync('./input/4.txt').toString()
const passports = file.split('\n\n').map(p => p.match(/(\D\D\D):(\S+)/g).map(a => a.split(':')))

const required = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
]

const isValid = (pass) => {
    if(required.find(req => !pass.find(([a]) => a === req))) {
        return false
    }

    const byr = pass.find(([a]) => a === 'byr')[1]
    if(byr.length !== 4 || +byr < 1920 || +byr > 2002) {
        console.log({byr})
        return false
    }

    const iyr = pass.find(([a]) => a === 'iyr')[1]
    if(iyr.length !== 4 || +iyr < 2010 || +iyr > 2020) {
        console.log({iyr})
        return false
    }

    const eyr = pass.find(([a]) => a === 'eyr')[1]
    if(eyr.length !== 4 || +eyr < 2020 || +eyr > 2030) {
        console.log({eyr})
        return false
    }

    const hgt = pass.find(([a]) => a === 'hgt')[1]
    if(hgt.match(/^(\d+)cm$/)) {
        const n = hgt.match(/(\d+)cm/)[1]
        if(+n < 150 || +n > 193) {
            console.log({hgt})
            return false
        }
    } else if(hgt.match(/^(\d+)in$/)) {
        const n = hgt.match(/(\d+)in/)[1]
        if(+n < 59 || +n > 76) {
            console.log({hgt, n})
            return false
        }
    } else {
        console.log({hgt})
        return false
    }

    const hcl = pass.find(([a]) => a === 'hcl')[1]
    if(!hcl.match(/^#[\da-f][\da-f][\da-f][\da-f][\da-f][\da-f]$/)) {
        console.log({hcl})
        return false
    }

    const ecl = pass.find(([a]) => a === 'ecl')[1]
    if(!['amb','blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl)) {
        console.log({ecl})
        return false
    }

    const pid = pass.find(([a]) => a === 'pid')[1]
    if(!pid.match(/^\d\d\d\d\d\d\d\d\d$/)) {
        console.log({pid})
        return false
    }

    return true
}

console.log(passports.filter(isValid).length)