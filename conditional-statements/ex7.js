let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2020
let answer3
let answer4

console.log("are you US citizen?")
let answer1 = prompt()

console.log("has previously bought a Tesla?")
let answer2 = prompt()

if(answer1 == 'yes' && answer2 == 'yes') {
    console.log("how long ago did you bought a Tesla?")
    answer3 = prompt()
    if(currentYear - answer3 > 4) {
        console.log("are you want to upgrade?")
        answer4 = prompt()
    } else {
        console.log("are you saticfied with the car?")
    }
} else if(answer2 == 'no' && answer1 == 'yes') {
    console.log("are you want to move to the USA?")
} else if(answer1 == 'no') {
    console.log("are you want to buy Tesla")
}
