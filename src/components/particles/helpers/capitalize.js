export const capitalize = string => {
  if (!string) return null
  return string[0].toUpperCase() + string.slice(1)
}

export default capitalize
