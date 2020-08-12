let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if(performance == "good") {
    salary += goodBonus
} else if(performance == "stellar") {
    salary += stellarBonus
} else {
    console.log("no bonus")
}

console.log(salary)