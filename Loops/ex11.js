const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
  
  for (let i = 0; i < dictionary.lenght; i++) {
    console.log('Words that begin with ' + Object.keys(dictionary)[i] + ':')
      for(let j = 0; j < dictionary[i].lenght; j++) {
        console.log(dictionary[j])
      }
  }