export const removeOrphans = html => {
  if (!html) return null
  return html.replace(/ ([^ ]*)$/, ` $1`)
}

export default removeOrphans
