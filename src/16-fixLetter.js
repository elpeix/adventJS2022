function fixLetter(letter) {
  return letter
    .replace(/(,|\.)/g, '$1 ')
    .replace(/\s+(,|\.|\?)/g, '$1')
    .replace(/\?+/g, '?')
    .replace(/\s+/g, ' ')
    .replace(/santa claus/gi, 'Santa Claus')
    .trim()
    .replace(/(^|[.?!]\s)(\w)/g, (m, p1, p2) => 
        p1 + p2.toUpperCase())
    .replace(/([^.?!])$/, '$1.')
}

export { fixLetter }