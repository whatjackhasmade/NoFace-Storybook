export const generateID = type => {
  const timestamp = Date.now()
  const randomInt = Math.floor(Math.random() * 500000)
  if (!type) return timestamp + `-` + randomInt
  return type + `-${timestamp}-${randomInt}`
}

export default generateID
