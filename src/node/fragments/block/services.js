const frag = `
fragment ServicesData on WORDPRESS_AcfServicesBlock {
  servicesFields: acf {
    services {
      colour
      description
      link {
        target
        title
        url
      }
      title
      type
    }
    subtitle
    title
  }
}
`

module.exports = frag
