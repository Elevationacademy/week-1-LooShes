const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

  const checkReservation = function() {
    const name = document.getElementById("fname").value
    let descriptor = Object.getOwnPropertyDescriptor(reservations, name)

    if(descriptor && descriptor.value.claimed == false) {
      console.log("Welcome, " + name)
  } else if(descriptor && descriptor.value.claimed == true) {
      console.log("Hmm, someone already claimed this reservation")
  } else {
      console.log("You have no reservation, your reservetation saved")
  }
  }