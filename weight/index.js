function orderWeight(strng) {
  return (
    strng.split(' ')
    .map(value => Number.parseInt(value))
    .filter(value => !isNaN(value))
    .sort((a,b)=>{
      let weightA = sumDigits(a)
      let weightB = sumDigits(b)
      if(weightA!==weightB) return weightA - weightB
      let sameWeight = [a.toString(), b.toString()].sort().map(value => Number.parseInt(value))
      return a === sameWeight[0] ? -1  : 1
    }).join(' ')
  )
}

function sumDigits(number) {
  let result = 0
  let digit = 0
  for(let i = number.toString().length; i>0; i--) {
    digit = Math.floor(number / (10**(i-1)))
    result += digit
    number = number - digit * (10**(i-1))
  }

  return result
}

console.log (orderWeight ('56 65 74  100 99 68 86 180 90'))