function checkStepNumbers(systemNames, stepNumbers) {
  const data = {}
  return systemNames.every((name, i) => 
    (!data[name] || data[name] < stepNumbers[i])
      ? (data[name] = stepNumbers[i], true)
      : false
  )
}

export { checkStepNumbers }