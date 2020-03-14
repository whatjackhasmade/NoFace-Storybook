import React from "react"
import Page from "templates/page/page"
import Post from "templates/post/post"

export const previewPage = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const title = urlParams?.get(`title`)

  return <Page pageTitle={title} />
}

export const previewPost = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const title = urlParams?.get(`title`)

  return <Post postTitle={title} />
}

export default {
  component: Page,
  title: `Pages/Preview`,
}
