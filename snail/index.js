snail = function(array) {
  let text = ''
  let count = 0

  if(array.length===1 && array[0].length===0){
    return []
  }
  
  while (array.length>0) {
    switch (count) {
      case 0:
        text += text ? ',' : text
        text += array.shift().join(',')
        break;
      case 1:
        for(let i=0; i < array.length; i++) {
          text += ',' + array[i].pop()
        }
        break;
      case 2:
        text += ',' + array.pop().reverse().join(',')
        break;
      case 3:
        for(let i= array.length - 1; i>=0; i--){
          text += ','  + array[i].shift()
        }
        break;
    }
    count = count+1 === 4 ? 0 : count + 1
  }
  return text.split(',').map(v=>Number.parseInt(v))
}

console.log (snail ([[]]))