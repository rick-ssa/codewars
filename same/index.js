
function comp (array1, array2){
  if (!array1 || !array2) return false

  let set1 = new Set (array1)
  let set2 = new Set (array2)
  
  if (set1.size !== set2.size) return false

  for (item of set1) {
    if (item < 0) return false
    if (!set2.has (item ** 2)) return false
  }

  return true
}

console.log(comp([2], [5]))