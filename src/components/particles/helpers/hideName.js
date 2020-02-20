import hasWhitespace from "./hasWhitespace"

export const hideName = name => {
  if (!name) return null
  if (!hasWhitespace(name)) return name
  var a, i, s
  a = name.split(` `)
  i = a[0]
  s = a[a.length - 1].substring(0, 1)
  return `${i} ${s}.`
}

export default hideName
