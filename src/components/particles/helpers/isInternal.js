export const isInternal = url => {
  if (!url) return false
  if (url.startsWith(`mailto:`)) return false
  if (url.startsWith(`tel:`)) return false
  if (url.startsWith(`http`)) return false
  return true
}

export default isInternal
