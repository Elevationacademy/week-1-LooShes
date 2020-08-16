let boughtTesla = 'yes'
const yearOfTeslaPurchase = 2014
let isUSCitizen = 'yes'
let currentYear = 2020
let answer3
let answer4

let answer1 = prompt("are you US citizen?")

let answer2 = prompt("have you previously bought a Tesla?")

if(answer1 == 'yes' && answer2 == 'yes') {
    answer3 = prompt("how long ago did you bought a Tesla?")
    if(currentYear - answer3 > 4) {
        answer4 = prompt("are you want to upgrade?")
    } else {
        answer4 = prompt("are you saticfied with the car?")
    }
} else if(answer2 == 'no' && answer1 == 'yes') {
    answer4 = prompt("are you want to move to the USA?")
} else if(answer2 == 'no') {
    answer4 = prompt("are you want to buy Tesla")
} else {
    answer4 = prompt("are you want to upgrade?")
}
