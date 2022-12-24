function getCompleted(part, total) {
  const arrPart = part.split(':')
  const arrTotal = total.split(':')
  const partSeconds = arrPart[0] * 3600 + arrPart[1] * 60 + arrPart[2] * 1
  const totalSeconds = arrTotal[0] * 3600 + arrTotal[1] * 60 + arrTotal[2] * 1
  let gcd = partSeconds
  let tmp = totalSeconds
  while (tmp) {
    const t = tmp
    tmp = gcd % tmp
    gcd = t
  }
  return `${partSeconds / gcd}/${totalSeconds / gcd}`
}

export { getCompleted }
