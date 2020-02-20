export const hasBrowser = () => {
  const documentDefined = typeof document !== `undefined`
  const windowDefined = typeof window !== `undefined`
  if (!documentDefined || !windowDefined) return false
  return true
}

export default hasBrowser
