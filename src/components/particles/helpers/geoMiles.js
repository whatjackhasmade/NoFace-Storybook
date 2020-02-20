// Converts numeric degrees to radians
export const toRad = deg => {
  if (!deg) return null
  return deg * (Math.PI / 180)
}

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
export const geoMiles = (geolocationOne, geolocationTwo) => {
  if (!geolocationOne || !geolocationTwo) return null
  if (!geolocationOne.lat || !geolocationTwo.lat) return null
  if (!geolocationOne.lng || !geolocationTwo.lng) return null

  var R = 6371.3 // metres
  var φ1 = toRad(geolocationOne.lat)
  var φ2 = toRad(geolocationTwo.lat)
  var Δφ = toRad(geolocationTwo.lat - geolocationOne.lat)
  var Δλ = toRad(geolocationTwo.lng - geolocationOne.lng)

  var a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  var d = R * c
  return d * 0.62137
}

export default geoMiles
