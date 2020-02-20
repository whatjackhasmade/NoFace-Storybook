export const hasWhitespace = s => {
  if (!s) return null
  return s.indexOf(` `) >= 0
}

export default hasWhitespace
