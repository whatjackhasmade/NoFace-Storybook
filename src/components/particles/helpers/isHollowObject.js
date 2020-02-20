export const isHollowObject = obj => {
  if (!obj) return true
  let isHollow = o =>
    obj.constructor === Object
      ? Object.keys(o).reduce((y, z) => y && isHollow(o[z]), true)
      : o.length == 0
  return isHollow(obj)
}

export default isHollowObject
