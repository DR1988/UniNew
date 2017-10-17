export default (...args) => (A, B) => {
  let a, b, field, key, primer, reverse, result //eslint-disable-line
  for (let i = 0, l = args.length; i < l; i++) {
    result = 0
    field = args[i]
    key = typeof field === 'string' ? field : field.name
    a = A[key]
    b = B[key]
    if (typeof field.primer !== 'undefined') {
      a = field.primer(a)
      b = field.primer(b)
    }
    reverse = (field.reverse) ? -1 : 1
    if (a < b) result = reverse * -1
    if (a > b) result = reverse * 1
    if (result !== 0) break
  }
  return result
}
