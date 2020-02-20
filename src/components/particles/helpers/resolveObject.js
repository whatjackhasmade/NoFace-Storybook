export const resolveObject = value => {
  if (!value) return null
  return key => {
    return key ? resolveObject((value || {})[key]) : value
  }
}

export default resolveObject
