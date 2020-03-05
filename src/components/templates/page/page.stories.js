import React from "react"
import Page from "./page"

import knobData from "./page.knobs.json"

import headerData from "knobs/header.knobs.json"
const { headerNav } = headerData
import footerData from "knobs/footer.knobs.json"
const { footerNav } = footerData

const query = `
{
  page(id: "cGFnZToy") {
    id
    blocks {
      ... on AcfGridBlock {
        acf {
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
    }
  }
}
`

const url = "https://noface.local/wp/graphql/"

export const standardPage = () => {
  const body = JSON.stringify({ query })
  fetch(url, {
    body,
    method: "POST",
  })
    .then(data => data.json())
    .catch(error => {
      console.error(error)
    })

  return (
    <Page
      footerMenus={footerNav.default}
      headerMenus={headerNav.default}
      pageContext={{ ...knobData }}
    />
  )
}

export default {
  component: Page,
  title: `Templates/Page`,
}
