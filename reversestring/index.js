
function spinWords(text){
  return text.split(' ').map(v=>{
    if(v.length>4) {
      return v.split('').reduce((t,value)=>t=value + t);
    }
    return v
  }).join(' ')
}

console.log(spinWords('meu nome é Ricardo Santos da Silva'))