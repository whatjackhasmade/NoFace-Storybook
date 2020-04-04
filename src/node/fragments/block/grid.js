const frag = `
fragment GridData on WORDPRESS_AcfGridBlock {
  gridFields: acf {
    rows {
      basic
      body
      content
      subtitle
      title
    }
    title
  }
}
`

module.exports = frag
