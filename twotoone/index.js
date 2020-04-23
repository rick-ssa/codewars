/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

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