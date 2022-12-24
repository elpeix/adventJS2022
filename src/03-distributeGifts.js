function distributeGifts(packOfGifts, reindeers) {
  if (!Array.isArray(packOfGifts) || !Array.isArray(reindeers)) {
    return 0
  }
  return reindeers.join('').length * 2 / packOfGifts.join('').length << 0
}

export { distributeGifts }