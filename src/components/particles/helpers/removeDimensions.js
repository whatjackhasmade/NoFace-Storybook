export const removeDimensions = html => {
  if (!html) return null
  html = html.replace(/width="[^"]*"/g, ``)
  html = html.replace(/height="[^"]*"/g, ``)
  return html
}

export default removeDimensions
