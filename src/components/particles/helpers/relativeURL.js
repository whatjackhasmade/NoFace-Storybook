import { getHostName } from "helpers"

export const relativeURL = url => {
  if (!url) return null
  url = url.replace(`https://noface.local`, ``)
  url = url.replace(process.env.GATSBY_DOMAIN, ``)
  url = url.replace(process.env.GATSBY_WORDPRESS_API, ``)
  url = url.replace(
    `https://${getHostName(process.env.GATSBY_WORDPRESS_API)}`,
    ``
  )
  return url
}

export default relativeURL
