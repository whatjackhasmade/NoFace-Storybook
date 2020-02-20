import date from "date-and-time"

const days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
]

const monthNames = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
]

const getOrdinalNum = n => {
  return (
    n +
    (n > 0
      ? [`th`, `st`, `nd`, `rd`][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ``)
  )
}

export const prettyDate = dateValue => {
  if (!dateValue) console.error(`No date provided to prettyDate function`)
  if (!dateValue) return null

  const dateObject = new Date(dateValue)

  const validDate = date.isValid(dateObject)

  if (!validDate) console.error(`Invalid date provided to prettyDate function`)
  if (!validDate) return null

  const weekday = days[dateObject.getDay()]
  const dayOfMonth = getOrdinalNum(dateObject.getDate())
  const month = monthNames[dateObject.getMonth()]
  return `${weekday}, the ${dayOfMonth} of ${month}`
}

export default prettyDate
