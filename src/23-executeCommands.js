function executeCommands(commands) {
  const overflowValue = 256
  const maxBits = 8
  let commandIndex = 0
  const result = Array(maxBits).fill(0)

  const mapCommands = {
    MOV: (item, register) => {
      if (isNaN(item)) {
        mapCommands.COP(item, register)
      } else {
        const index = getRegisterIndex(register)
        result[index] = getValue(item)
      }
    },
    COP: (registerA, registerB) => {
      const indexA = getRegisterIndex(registerA)
      const indexB = getRegisterIndex(registerB)
      result[indexB] = getValue(result[indexA])
    },
    ADD: (registerA, registerB) => {
      const indexA = getRegisterIndex(registerA)
      const indexB = getRegisterIndex(registerB)
      result[indexA] = getValue(result[indexA] + result[indexB])
    },
    DEC: (register) => {
      const index = getRegisterIndex(register)
      result[index] = getValue(result[index] - 1)
    },
    INC: (register) => {
      const index = getRegisterIndex(register)
      result[index] = getValue(result[index] + 1)
    },
    JMP: (index) => {
      if (result[0] === 0) {
        return
      }
      index = Number(index)
      if (index < 0) {
        index = commands.length + index
      }
      if (index >= commands.length) {
        index = index % commands.length
      }
      commandIndex = index
    },
  }
  const getRegisterIndex = (register) => {
    return Number(register.replace('V', '')) % maxBits
  }
  const getValue = (value) => {
    value = Number(value)
    value = value % overflowValue
    if (value < 0) {
      value = overflowValue + value
    }
    return Math.abs(value)
  }

  while (commandIndex < commands.length) {
    const [commandName, args] = commands[commandIndex].split(' ')
    const params = args.split(',')
    commandIndex++
    mapCommands[commandName](...params)
  }
  return result
}

export { executeCommands }