function rot13(message){
  return message.split('').map(letter=>{
    let letterNum = letter.charCodeAt(0)
    if(letterNum >= 97 && letterNum <= 122) {
      return letterNum + 13 > 122 ? String.fromCharCode(97 + letterNum - 110) : String.fromCharCode(letterNum + 13)
    }

    if(letterNum >= 65 && letterNum <= 90) {
      return letterNum + 13 > 90 ? String.fromCharCode(65 + letterNum - 78) : String.fromCharCode(letterNum + 13)
    }

    return letter
  }).join('')
}

console.log (rot13 ('Te@st'))

'a = 97'
'z = 122'
'A = 65'
'Z = 90'