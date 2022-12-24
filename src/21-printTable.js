function printTable(gifts) {
  const [n, m] = gifts.reduce(([n, m], {name, quantity}) => [
    Math.max(n, name.length),
    Math.max(m, quantity.toString().length)
  ], [4, 8])

  return [
    '+'.repeat(n + m + 7),
    `| ${'Gift'.padEnd(n)} | ${'Quantity'.padEnd(m)} |`,
    `| ${'-'.repeat(n)} | ${'-'.repeat(m)} |`,
    ...gifts.map(({name, quantity}) => 
      `| ${name.padEnd(n)} | ${quantity.toString().padEnd(m)} |`
    ),
    '*'.repeat(n + m + 7)
  ].join('\n')
}

export { printTable }