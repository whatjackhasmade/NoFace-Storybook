const providedError = ` provided to prettyDate function`

export const prettyDate = dateValue => {
  if (!dateValue) console.error(`No date ${providedError}`)
  if (!dateValue) return null

  const dateObject = new Date(dateValue)

  if (!validDate) console.error(`Invalid date ${providedError}`)
  if (!validDate) return null

  return dateObject
}

export default prettyDate
