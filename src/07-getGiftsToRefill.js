function getGiftsToRefill(a1, a2, a3) {
  const cleanA1 = [...new Set(a1)]
  const cleanA2 = [...new Set(a2)]
  const cleanA3 = [...new Set(a3)]
  const warehouse = [...cleanA1, ...cleanA2, ...cleanA3]
  const gifts = [...new Set(warehouse)]
  return gifts.filter(gift => warehouse.filter(w => w === gift).length < 2)
}

export { getGiftsToRefill }