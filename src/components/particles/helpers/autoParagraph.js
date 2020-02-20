export const autoParagraph = html => {
  if (!html) return null
  html = `<p>` + html.split(/\n/).join(`</p>\n<p>`) + `</p>`
  return html
}

export default autoParagraph
