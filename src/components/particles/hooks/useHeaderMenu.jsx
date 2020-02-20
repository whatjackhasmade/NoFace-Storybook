import { useStaticQuery, graphql } from "gatsby"

export const useHeaderMenu = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query headerMenu {
        wordpress {
          menu(id: "TWVudToy") {
            id
            count
            menuItems {
              nodes {
                childItems {
                  edges {
                    node {
                      cssClasses
                      description
                      id
                      label
                      target
                      url
                    }
                  }
                }
                cssClasses
                description
                id
                label
                target
                url
              }
            }
          }
        }
      }
    `
  )
  return wordpress.menu
}

export default useHeaderMenu
