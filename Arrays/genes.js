const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

let newGenes = []
let sliced

newGenes = genes.slice(0, 2, "ACADM", "GLMN")
console.log(newGenes)

newGenes[2] = genes[4]
newGenes[3] = genes[3]
newGenes[4] = genes[2]
console.log(newGenes)

sliced = newGenes.slice(3, 4)
console.log(sliced)
newGenes[3] = newGenes[4]
newGenes.pop()
newGenes.push(genes[3])
newGenes.push(genes[3])
console.log(newGenes)

newGenes.unshift("FXT")
console.log(newGenes)