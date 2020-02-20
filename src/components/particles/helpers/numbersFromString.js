export const numbersFromString = stringVal => {
  if (!stringVal) return null
  const numbers = stringVal
    .split(``)
    .filter(x => x === `0` || Number(x))
    .map(x => parseInt(x, 10))
  return numbers
}

export default numbersFromString
