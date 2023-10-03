export const isValidItems = (arr) => {
  return arr.some(
    (element) =>
      element._id && element.title && element.price && element.quantity
  )
}
