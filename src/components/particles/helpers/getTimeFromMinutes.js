import date from "date-and-time"

export const getTimeFromMinutes = mins => {
  if (!mins) return null
  if (mins >= 24 * 60 || mins < 0) {
    throw new RangeError(
      `Valid input should be greater than or equal to 0 and less than 1440.`
    )
  }

  const now = new Date()
  const start = new Date(now.setHours(0, 0, 0, 0))
  const addedMinutes = date.addMinutes(start, mins)
  return date.format(addedMinutes, `hh:mm A`, true)
}

export default getTimeFromMinutes
