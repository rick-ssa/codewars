
function rgb(r, g, b){
  return toHexa(r) + toHexa(g) + toHexa(b) 
}

const toHexa = (number) => {
  number = number < 0 ? 0 : number
  number = number > 255 ? 255 : number
  number = Math.round(number)
  return (
      number.toString(16).length === 1 
      ? 0 + number.toString(16).toUpperCase() 
      : number.toString(16).toUpperCase()
  )
}

console.log(rgb(12,5.3,75))