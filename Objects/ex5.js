const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

function setCharAt(str,index,chr) {
    if(index > str.length-1) {
        return str
    } 
    return chr + str.substring(index+1)
}
  
let name = prompt('Please enter the name for your reservation')
name = name.toLowerCase()
let firstLetter = name.charAt(0).toUpperCase()
name = setCharAt(name ,0, firstLetter)
let descriptor = Object.getOwnPropertyDescriptor(reservations, name)

if(descriptor && descriptor.value.claimed == false) {
    console.log("Welcome, " + name)
} else if(descriptor && descriptor.value.claimed == true) {
    console.log("Hmm, someone already claimed this reservation")
} else {
    console.log("You have no reservation, your reservetation saved")
    Reflect.set(reservations, name, { claimed: true });
}

console.log(reservations)
