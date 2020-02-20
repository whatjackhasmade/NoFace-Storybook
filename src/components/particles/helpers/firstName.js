import hasWhitespace from "./hasWhitespace"

export const firstName = name => {
  if (!name) return null
  if (!hasWhitespace(name)) return name
  var i, s
  i = name.indexOf(` `)
  s = name.substring(0, i)
  return s
}

export default firstName
