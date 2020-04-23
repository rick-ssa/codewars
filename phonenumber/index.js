
function createPhoneNumber(numbers){
  const pattern = /(\d{3})(\d{3})(\d{4})/
  const array = pattern.exec(numbers.join(''))
  return `(${array[1]}) ${array[2]}-${array[3]}`
}

console.log(createPhoneNumber([2,3,4,5,1,6,7,8,9,0]))