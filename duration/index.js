function formatDuration (seconds) {
  const A_SECOND = 1
  const A_MIN = 60
  const A_HOUR  = 60 * A_MIN
  const A_DAY = 24 * A_HOUR
  const A_YEAR = 365 * A_DAY
  
  if (seconds === 0) return 'now'

  const labelUnits = ['year', 'day', 'hour', 'minute', 'second']
  const oneUnits = [A_YEAR, A_DAY, A_HOUR, A_MIN, A_SECOND]

  const unitValues = []

  for (let i=0; i<5; i++) {
    unitValues.push (calcTimeUnit(seconds, oneUnits[i]))
    seconds = remainSeconds (seconds, oneUnits[i])
  }

  const resultArray = unitValues.map ((item, index) => {
    return attachUnit (item, labelUnits[index])
  }).filter (item => item)

  let lastIttem = resultArray.pop()

  let result = resultArray.length > 0 
    ? `${resultArray.join(', ')} and ${lastIttem}` 
    : lastIttem

  return result
}

function calcTimeUnit (seconds, oneUnit) {
  return (seconds >= oneUnit) ? Math.floor(seconds / oneUnit) : 0
}

function remainSeconds (seconds, oneUnit) {
  return (seconds >= oneUnit) ? (seconds % oneUnit) : seconds
}

function attachUnit (value, unit) {
  if (!value) return ''

  return value > 1 ? `${value} ${unit}s` : `${value} ${unit}`
}

console.log (formatDuration (62))