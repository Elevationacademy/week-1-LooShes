let dog1 = {
    name: 'Barnie',
    color: 'black',
    weight: 30
}

let dog2 = {
    name: 'Mikie',
    color: 'white',
    weight: 45
}

let myList = [dog1, dog2]

let dog3 = {
    name: 'Queeny',
    color: 'black-white',
    weight: 25
}

let dog4 = {
    name: 'Apple',
    color: 'orange',
    weight: 20
}

let myList2 = [dog3, dog4]

myList2[2] = [...myList]

console.log(myList2)