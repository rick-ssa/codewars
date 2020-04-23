
function longest(s1, s2) {
  let resultString = clear(s1 + s2)
  return resultString.sort().join('');
  
};

function clear(text) {
  return text.toLowerCase().split('').sort().filter((value, index,array)=>{
    return value !== array[index - 1]
  })
}

console.log(longest('xyaabbbccccdefww','xxxxyyyyabklmopq'))