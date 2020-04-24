function primeFactors (n) {
  let reduce = n
  let primes = {}
  let num = 2
  let result = ''

  while (reduce !== 1) {
    if (reduce % num === 0) {
      reduce /= num
      if (!primes[num]) {
        primes[num] = 1
      } else {
        primes[num] = primes[num] + 1
      }
      num = 2
    } else {
      num = num === 2 ? 3 : num + 2
    }
  }

  for (number in primes) {
    result += primes[number] === 1 ? `(${number})` : `(${number}**${primes[number]})`
  }
  return result
}

console.log (primeFactors (86240))