function addElementToBeginningOfArray(array, n) {
  [n, ...array]
  return array
} 


function destructivelyAddElementToBeginningOfArray(array, n) {
  array.unshift(n)
  return array
}

function addElementToEndOfArray(array, element) {
  [...array, element]
  return array  
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(0)
  return array
}