let p1 = {
   name: "Jill",
   age: 32,
   city: "Ramat Gan" 
}

let p2 = {
    name: "Robert",
    age: 32,
    city: "Raanana" 
 }

 if(p1.age == p2.age) {
     if(p1.city == p2.city) {
         console.log("Jill wanted to date Robert")
     } else {
         console.log("Jill wanted to date Robert, but couldn't")
     }
 }