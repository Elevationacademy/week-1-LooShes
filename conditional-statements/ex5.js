const a = 3
let b = 2
let c = 0 || 12
let d

b = c          // b=12
b++            // b=13
if(d){
  b = a
}

d = a + (b * c)  // d=12*13+3=159
d++              // d=160
b += 2           // b=15

console.log(a)
console.log(b)
console.log(c)
console.log(d)
