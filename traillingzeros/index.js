function zeros (n) {
  let response = 0;
  let exp = 1
  while(5**exp <= n) {
    response += Math.floor(n / (5**exp))
    exp++
  }
  
  return response
}

console.log (zeros (1010101010000))