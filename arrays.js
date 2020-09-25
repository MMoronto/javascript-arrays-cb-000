function addElementToBeginningOfArray(array, n) {
  [n, ...array]
  return array
} 


function destructivelyAddElementToBeginningOfArray(array, n) {
  array.unshift(n)
  return array
}

addElementToEndOfArray(array, element) {
  
}