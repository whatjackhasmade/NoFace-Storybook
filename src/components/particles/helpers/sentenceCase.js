export const sentenceCase = str => {
  if (!str) return null
  return str
    .split(` `)
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(` `)
}

export default sentenceCase
