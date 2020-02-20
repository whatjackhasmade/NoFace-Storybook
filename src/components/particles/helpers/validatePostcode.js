/**
 * `uk-postcode-validator` validate UK postcodes.
 * @param {string} postcode The postcode that needs to be validated
 */

const POSTCODE_VALIDATION_REGEXT = /^([Gg][Ii][Rr]0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/

export const validateUKPostcode = postcode => {
  if (!postcode) return false
  return postcode.replace(` `, ``).match(POSTCODE_VALIDATION_REGEXT)
}

export default validateUKPostcode
