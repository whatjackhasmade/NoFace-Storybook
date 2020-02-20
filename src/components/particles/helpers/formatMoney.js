export const formatMoney = value => {
  const floatValue = parseFloat(value)
  if (!floatValue) console.error(`${value} is not a valid number`)
  if (!floatValue) return 0

  const decimal = parseFloat(floatValue.toFixed(2) / 100)
  const valueFormatted = new Intl.NumberFormat(`en-GB`, {
    style: `currency`,
    currency: `GBP`,
  }).format(decimal)

  return valueFormatted
}

export default formatMoney
