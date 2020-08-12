const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

let result = {}

for(let i = 0; i < names.length; i++) {
    result = Object.assign(...names.map((k, i) => ({[k]: ages[i]})))
}

console.log( result)