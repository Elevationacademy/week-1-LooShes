// ex1
const calcAge = function(todayYear, birthdayYear) {
    return todayYear - birthdayYear
}
const age = calcAge(2017, 1989)
console.log(age)

//ex2
const calcAgeExtended = function(todayYear, birthdayYear, todayMonth, birthdayMonth) {
    let year = todayYear - birthdayYear
    if(todayMonth < birthdayMonth) {
        year--
    }
    return year
}
const accurateAge = calcAgeExtended(2017, 1989, 9, 12)
console.log(accurateAge)
