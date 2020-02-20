export const decodeHTML = html => {
  if (!html) return null
  html = html.replace(`amp;`, ``)
  return html.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec)
  })
}

export default decodeHTML
