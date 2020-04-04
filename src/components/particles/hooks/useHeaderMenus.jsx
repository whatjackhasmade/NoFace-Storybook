import { useStaticQuery, graphql } from "gatsby"

export const useHeaderMenus = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query headerMenus {
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

export default useHeaderMenus
