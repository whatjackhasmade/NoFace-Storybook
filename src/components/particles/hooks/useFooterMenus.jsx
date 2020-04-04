import { useStaticQuery, graphql } from "gatsby"

export const useFooterMenus = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query footerMenus {
        wordpress {
          menus(where: { location: PRIMARY }) {
            nodes {
              id
              name
              slug
              menuItems {
                nodes {
                  id
                  label
                  target
                  title
                  url
                }
              }
            }
          }
        }
      }
    `
  )
  return wordpress.menus.nodes
}

export default useFooterMenus
