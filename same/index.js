
function comp (array1, array2){
  if (!array1 || !array2) return false
  
  if (array1.length !== array2.length) return false

  array1 = array1.sort((a,b)=>a-b)
  array2 = array2.sort((a,b)=>a-b)
  
  let result = array1.reduce((hasSquared,value,index)=>{
    if (hasSquared ===false) return false

    if(array2[index]!== Math.pow(value,2)) {
      return false
    } 

    return true
  },true)

  return result
}

console.log(comp([11, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))