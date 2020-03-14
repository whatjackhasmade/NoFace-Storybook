import React from "react"
import Page from "templates/page/page"
import Post from "templates/post/post"

export const previewPage = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const uri = urlParams?.get(`uri`)

  return <Page uri={uri} />
}

export const previewPost = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const uri = urlParams?.get(`uri`)

  return <Post uri={uri} />
}

export default {
  component: Page,
  title: `Pages/Preview`,
}
