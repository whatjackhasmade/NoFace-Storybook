export const relativeURL = url => {
  if (!url) return null
  url = url.replace(process.env.GATSBY_DOMAIN, ``)
  return url
}

export default relativeURL
