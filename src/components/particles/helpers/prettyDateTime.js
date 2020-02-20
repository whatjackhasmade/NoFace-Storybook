import date from "date-and-time"
import "date-and-time/plugin/ordinal"
date.plugin(`ordinal`)

const providedError = ` provided to prettyDateTime function`

export const prettyDateTime = dateValue => {
  if (!dateValue) console.error(`No date ${providedError}`)
  if (!dateValue) return null

  const dateObject = new Date(dateValue)

  const validDate = date.isValid(dateObject)

  if (!validDate) console.error(`Invalid date ${providedError}`)
  if (!validDate) return null

  const dayOfMonth = date.format(dateObject, `DDD`, true)
  const month = date.format(dateObject, `MMMM`, true)
  const year = date.format(dateObject, `YYYY`, true)
  const time = date.format(dateObject, `hh:mm A`, true)

  return `${dayOfMonth} ${month} ${year} - ${time}`
}

export default prettyDateTime
