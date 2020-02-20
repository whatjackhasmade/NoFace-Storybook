export const flattenSlug = slug => {
  if (!slug) return null
  if (slug === `home` || slug === `homepage`) {
    slug = ``
  }
  return slug
}

export default flattenSlug
