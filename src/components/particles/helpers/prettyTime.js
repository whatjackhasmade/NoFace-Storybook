import date from "date-and-time"

export const prettyTime = dateValue => {
  if (!dateValue) console.error(`No date provided to prettyTime function`)
  if (!dateValue) return null

  const dateObject = new Date(dateValue)

  const validDate = date.isValid(dateObject)

  if (!validDate) console.error(`Invalid date provided to prettyTime function`)
  if (!validDate) return null

  return date.format(dateObject, `hh:mm`, true)
}

export default prettyTime
