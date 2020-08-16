const splice = function(array, start, count, ...params){
    let paramArray = params
    let countParams = paramArray.length
    let first = paramArray.shift() // gives the first argument 
    let move = abs(countParams - count)
    
    shiftArr(array, start, start+move)
    
    }

    function shiftArr(array, from, to) {
        if(to === from) {
            return array
        } 
      
        let next, prev

        for(let k = from; k != to; k += 2){
            prev = array[k]
            next = array[k + 1]
            array[k + 1] = prev
        }
        return array
      }
















// remove 1 element
let arr = [1,2,3]
splice(arr, 0,1); 
console.log(arr); //should be [2,3]


// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log(arr); //should be [0,1,2,3]


// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log(arr); //should be [-1,0,1,2,3]


// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log(arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log(arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log(deleted); //should be [] 

    