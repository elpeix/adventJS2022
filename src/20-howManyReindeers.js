function howManyReindeers(reindeerTypes, gifts) {
  reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity)
  return gifts.map(gift => {
    const objReinders = {}
    while (gift.weight > 0) {
      reindeerTypes.forEach(reindeer => {
        if (reindeer.weightCapacity <= gift.weight) {
          objReinders[reindeer.type] = (objReinders[reindeer.type] || 0) + 1
          gift.weight -= reindeer.weightCapacity
        }
      })
    }
    const reindeers = []
    Object.entries(objReinders).forEach(([type, num]) => {
      reindeers.unshift({ type, num })
    })
    return { country: gift.country, reindeers }
  })
}

export { howManyReindeers }
