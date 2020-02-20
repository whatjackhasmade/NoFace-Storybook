import date from "date-and-time"

export const getTimeFromMinutes = (dateOne, dateTwo) => {
  if (!dateOne) console.error(`No date provided to argument one`)
  if (!dateTwo) console.error(`No date provided to argument two`)
  if (!dateOne || !dateTwo) return false

  const dateOneObject = new Date(dateOne)
  const dateTwoObject = new Date(dateTwo)

  const validOne = date.isValid(dateOneObject)
  const validTwo = date.isValid(dateTwoObject)

  if (!validOne) console.error(`Invalid date provided to argument one`)
  if (!validTwo) console.error(`Invalid date provided to argument two`)
  if (!validOne || !validTwo) return false

  return date.isSameDay(dateOneObject, dateTwoObject)
}

export default getTimeFromMinutes
