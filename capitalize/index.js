
String.prototype.toJadenCase = function () {
  return (
    this.split(' ').map(word=>{
      return word.split('').map((letter,i)=> i === 0 ? letter.toUpperCase() : letter).join('')
    }).join(' ')
  )
};

console.log('meu nome é Ricardo Santos da Silva'.toJadenCase())