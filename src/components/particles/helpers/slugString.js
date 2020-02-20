export const slugString = text => {
  if (!text) return null
  return text
    .toLowerCase()
    .replace(/ /g, `-`)
    .replace(/[^\w-]+/g, ``)
}

export default slugString
