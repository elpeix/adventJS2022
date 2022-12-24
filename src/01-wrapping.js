function wrapping(gifts) {
  if (!Array.isArray(gifts)) {
    throw new Error('gifts must be an array')
  }
  if (gifts.some(gift => typeof gift !== 'string')) {
    throw new Error('gifts must be an array of strings')
  }
  return gifts.map(gift => {
    const border = '*'.repeat(gift.length + 2)
    return `${border}\n*${gift}*\n${border}`
  })
}

export  { wrapping}