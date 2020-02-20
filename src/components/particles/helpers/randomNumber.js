// Function to generate random number
export const randomNumber = (min, max) => {
  if (!min || !max) return null
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default randomNumber
