export const slugTitle = html => {
  if (!html) return null
  html = html.replace(`-`, ` `)
  html = html.toLowerCase().split(` `)
  for (var i = 0; i < html.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    html[i] = html[i].charAt(0).toUpperCase() + html[i].substring(1)
  }
  // Directly return the joined string
  return html.join(` `)
}

export default slugTitle
