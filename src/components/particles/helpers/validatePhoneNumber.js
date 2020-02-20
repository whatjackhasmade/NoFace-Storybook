import { parsePhoneNumberFromString } from "libphonenumber-js"

export const validateUKPhone = numberVal => {
  if (!numberVal) return false
  const stringVal = `${numberVal}`
  const phoneNumber = parsePhoneNumberFromString(stringVal, `GB`)
  if (!phoneNumber) return false
  return phoneNumber.isValid()
}

export default validateUKPhone
