// Creates a console log with the current date/time to ISOString
const timeLog = message => {
  const typeOf = typeof message
  const notString = typeOf !== `string`
  if (notString) message = JSON.stringify(message)

  const now = new Date().toLocaleTimeString()
  console.log(`${now} - ${message}`)
}

module.exports = timeLog
