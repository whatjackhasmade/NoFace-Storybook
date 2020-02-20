import humanizeDuration from "humanize-duration"

export const formatSeconds = time => {
  if (!time) return null
  const timeVal = Number(time)
  const valueFormatted = humanizeDuration(time * 60000)
  return valueFormatted
}

export default formatSeconds
