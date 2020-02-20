export const randomString = (length = 10) => {
  const string = Array(length)
    .fill(`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`)
    .map(function(x) {
      return x[Math.floor(Math.random() * x.length)]
    })
    .join(``)
  return string
}

export default randomString
