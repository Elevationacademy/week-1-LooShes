let numArr = [1,5,4,56,8,2,1,52,13]
let avg = 0
let i = 0
let sum = 0

while(i < numArr.length) {
    sum += numArr[i]
    i++
}

avg = sum / numArr.length

console.log(avg)