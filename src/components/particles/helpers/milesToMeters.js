export const milesToMeters = miles => {
  if (!miles) return null
  return miles * 1609.344
}

export default milesToMeters
