
function dirReduc(arr){
  const oposites = {
    SOUTH : 'NORTH',
    NORTH : 'SOUTH',
    WEST : 'EAST',
    EAST : 'WEST'
  }

  for (let i=0; i<arr.length; i++) {
    if (i !== 0) {
      if (arr[i-1] === oposites[arr[i]]) {
        arr.splice(i-1,2)
        i -= 1
        continue
      }
    }

    if (i !== (arr.length - 1)) {
      if (arr[i] === oposites[arr[i+1]]) {
        arr.splice(i,2)
        i -= 1
        continue
      }
    }
  }
  return arr
}

console.log (dirReduc ( ["NORTH", "WEST", "SOUTH", "EAST"] ))