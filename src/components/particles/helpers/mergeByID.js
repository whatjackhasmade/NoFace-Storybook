export const mergeById = (a1, a2) => {
  if (!a1 || !a2) return null
  return a1.map(itm => ({
    ...a2.find(item => item.id === itm.id && item),
    ...itm,
  }))
}

export default mergeById
