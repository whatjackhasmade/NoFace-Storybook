import React from "react"
import Helmet from "react-helmet"

import IsUser from "@particles/permission/isUser"

import Container from "@organisms/container/container"
import Header from "@organisms/header/header"

const Book = ({ children, stage, title }) => (
  <IsUser>
    {title && (
      <Helmet defer={false}>
        <title>{title} - Makeup &amp; Mane</title>
      </Helmet>
    )}
    <Header booking={true} stage={stage} />
    {children}
  </IsUser>
)

export default Book
