import { isEmptyObject } from "@helpers"

const isNull = value => {
  return typeof value !== `undefined` && (typeof value !== `object` || !value)
}

const safeInitial = objectVal => {
  const o = objectVal
  if (!o) return null
  if (isEmptyObject(o)) return null

  const newObject = Object.fromEntries(
    Object.keys(o).map((key, index) => {
      if (isNull(o[key])) return [key, ``]
      return [key, o[key]]
    })
  )

  return newObject
}

export default safeInitial
