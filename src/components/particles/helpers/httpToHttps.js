export const httpTohttps = html => {
  if (!html) return null
  return html.replace(`http://`, `https://`)
}

export default httpTohttps
