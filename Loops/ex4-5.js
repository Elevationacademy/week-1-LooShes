let nums = []

for(let i = 0; i < 100; i++) {
    nums[i] = i + 1
}

console.log(nums)

//ex5
let j = 0
while(j < nums.length) {
    if(nums[j] % 2 != 0) {
        console.log(nums[j])
    }
    j++
}