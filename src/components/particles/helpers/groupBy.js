export const groupBy = (xs, f) => {
  if (!xs) return null
  return xs.reduce(
    (r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  )
}

export default groupBy
