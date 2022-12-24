function carryGifts(gifts, maxWeight) {
  return gifts
    .filter(gift => gift.length <= maxWeight)
    .reduce((bags, gift) => {
        const bag = bags.at(-1)
        const weight = bag.join('').length + gift.length
        if (weight <= maxWeight) {
          bag.push(gift)
          return bags
        }
        bags.push([gift])
        return bags
      }, [[]])
    .map(bag => bag.join(' '))
    .filter(bag => bag)
}

export { carryGifts }
