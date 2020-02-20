import date from "date-and-time"

const daysBetween = (dateOne, dateTwo) => {
  if (!dateOne) console.error(`No date provided to argument one`)
  if (!dateTwo) console.error(`No date provided to argument two`)
  if (!dateOne || !dateTwo) return null

  const dateOneObject = new Date(dateOne)
  const dateTwoObject = new Date(dateTwo)

  const validOne = date.isValid(dateOneObject)
  const validTwo = date.isValid(dateTwoObject)

  if (!validOne) console.error(`Invalid date provided to argument one`)
  if (!validTwo) console.error(`Invalid date provided to argument two`)
  if (!validOne || !validTwo) return null

  const timeDiff = dateOneObject.valueOf() - dateTwoObject.valueOf()
  if (timeDiff < 0) return 0
  const days = timeDiff / (1000 * 60 * 60 * 24)
  return days
}
export default daysBetween
