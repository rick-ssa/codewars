function towerBuilder(nFloors) {
  const base = nFloors * 2 - 1
  const tower = []
  let whiteSpace = ''
  let astheristic = ''

  for(let i=0; i<nFloors;i++) {
    astheristic = repeatCharacter('*',(i + 1) * 2 - 1)
    whiteSpace = repeatCharacter(' ', (base - astheristic.length)/2)
    tower.push(whiteSpace + astheristic + whiteSpace)
  }

  return tower
}

function repeatCharacter(char, num) {
  let result = ''
  for (let i=0; i<num; i++) {
    result += char
  }
  return result
}

console.log(towerBuilder(20))