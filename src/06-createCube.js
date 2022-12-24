function createCube(size) {
  const inc = []
  const dec = []
  const incBase = '_\\'.repeat(size)
  const decBase = '_/'.repeat(size)
  Array.from({ length: size }, (_, i) => {
    const spaces = ' '.repeat(size - i - 1)
    const slashes = '/\\'.repeat(i + 1)
    const reverseSlashes = '\\/'.repeat(i + 1)
    inc.push(`${spaces}${slashes}${incBase}`)
    dec.unshift(`${spaces}${reverseSlashes}${decBase}`)
  })
  return `${inc.join('\n')}\n${dec.join('\n')}`
}

export { createCube }